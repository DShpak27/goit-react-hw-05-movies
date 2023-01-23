import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.scss';
import { Link } from 'react-router-dom';

function MovieList({ moviesList }) {
    const location = useLocation();
    const path = location.pathname === '/' ? 'movies/' : '';
    return (
        <ul className={css.movieList}>
            {moviesList.map(movie => {
                return (
                    <li key={movie.id} className={css.movieListItem}>
                        <Link
                            className={css.Link}
                            // to={`/movies/${movie.id}`}
                            // to={`/movies/${movie.id}`}
                            to={`${path}${movie.id}`}
                            state={{ from: location }}
                        >
                            {movie.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

MovieList.propTypes = {
    moviesList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
