import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.scss';
import MovieList from '../../components/MovieList/MovieList.jsx';
import ErrorMessageBlock from '../../components/ErrorMessageBlock/ErrorMessageBlock.jsx';
import movieServiceApi from '../../services/searchService.js';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('name') ?? '';

    const updateQueryString = name => {
        const nextParams = name !== '' ? { name } : {};
        setSearchParams(nextParams);
    };
    const findMovies = query => {
        movieServiceApi
            .getSearchedMovies(query)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                if (!data.results.length) {
                    setStatus('not found');
                } else {
                    setfindedMovies(data.results);
                    setStatus('ok');
                }
            })
            .catch(error => {
                setErrorDescription(error.message);
                setStatus('error');
            });
    };
    const [status, setStatus] = useState('undefined');
    const [errorDescription, setErrorDescription] = useState('');
    const [findedMovies, setfindedMovies] = useState([]);

    const handleSubmit = evt => {
        evt.preventDefault();
        const curentQuery = evt.currentTarget.elements.searchInput.value
            .trim()
            .toLowerCase();

        if (curentQuery === '') {
            return;
        }
        findMovies(curentQuery);
    };

    useEffect(() => {
        if (movieName === '') {
            return;
        }
        findMovies(movieName);
    }, [movieName]);

    return (
        <section className={css.movieSearch}>
            <form
                className={css.searchForm}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <input
                    className={css.searchInput}
                    type="text"
                    name="searchInput"
                    placeholder="Type a movie title you need to find"
                    autoFocus="on"
                    value={movieName}
                    onChange={evt => updateQueryString(evt.target.value)}
                />
                <button className={css.submitBtn} type="submit">
                    Search
                </button>
            </form>
            {status === 'ok' && <MovieList moviesList={findedMovies} />}
            {status === 'error' && (
                <ErrorMessageBlock errorDescription={errorDescription} />
            )}
            {status === 'not found' && (
                <p className={css.nothingFoundText}>
                    We didn't find anything with that name! Try another name...
                </p>
            )}
        </section>
    );
}
