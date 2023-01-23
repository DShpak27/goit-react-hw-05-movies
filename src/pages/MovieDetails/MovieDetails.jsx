import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ErrorMessageBlock from '../../components/ErrorMessageBlock/ErrorMessageBlock.jsx';
import movieServiceApi from '../../services/searchService.js';
import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.scss';

const makeLinkStyle = ({ isActive }) =>
    isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [status, setStatus] = useState('ok');
    const [errorDescription, setErrorDescription] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const localtionState = { from: location.state?.from };

    const goBack = () => navigate(location.state?.from || '/movies');

    const getMovieInfo = movieId => {
        movieServiceApi
            .getMovieById(movieId)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                const posterPath = `https://image.tmdb.org/t/p/w200${data.poster_path}`;
                const title = data.title;
                const releaseDate = `(${data.release_date.slice(0, 4)})`;
                const userScore = `${(data.vote_average * 10).toFixed(0)}%`;
                const overview = data.overview;
                const genres = data.genres.map(genre => genre.name).join(' ');
                setMovieInfo({
                    posterPath,
                    title,
                    releaseDate,
                    userScore,
                    overview,
                    genres,
                });
            })
            .catch(error => {
                setErrorDescription(error.message);
                setStatus('error');
            });
    };

    useEffect(() => {
        getMovieInfo(movieId);
    }, [movieId]);

    return (
        <main>
            <section className={css.movieDetails}>
                <button className={css.goBackBtn} onClick={goBack}>
                    GoBack
                </button>
                {status === 'ok' && (
                    <>
                        <div className={css.topWrapper}>
                            <div className={css.moviePosterWrapper}>
                                <img
                                    src={movieInfo.posterPath}
                                    alt="the movie poster"
                                />
                            </div>
                            <div className={css.movieInfoWrapper}>
                                <h1
                                    className={css.title}
                                >{`${movieInfo.title} ${movieInfo.releaseDate}`}</h1>
                                <p className={css.text}>
                                    User Score: {movieInfo.userScore}
                                </p>
                                <h2 className={css.title}>Overview</h2>
                                <p className={css.text}>{movieInfo.overview}</p>
                                <h3 className={css.title}>Genres</h3>
                                <p className={css.text}>{movieInfo.genres}</p>
                            </div>
                        </div>
                        <div className={css.bottomWrapper}>
                            <h4 className={css.title}>
                                Additional information
                            </h4>
                            <div className={css.LinkWrapper}>
                                <NavLink
                                    className={makeLinkStyle}
                                    to="cast"
                                    state={localtionState}
                                >
                                    Cast
                                </NavLink>
                                <NavLink
                                    className={makeLinkStyle}
                                    to="reviews"
                                    state={localtionState}
                                >
                                    Reviews
                                </NavLink>
                            </div>
                        </div>
                    </>
                )}
                {status === 'error' && (
                    <ErrorMessageBlock errorDescription={errorDescription} />
                )}
            </section>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </main>
    );
}
