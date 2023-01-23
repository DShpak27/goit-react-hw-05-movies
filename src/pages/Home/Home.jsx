import { useState, useEffect } from 'react';
import css from './Home.module.scss';
import movieServiceApi from '../../services/searchService.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import ErrorMessageBlock from '../../components/ErrorMessageBlock/ErrorMessageBlock.jsx';

export default function Home() {
    const [trendingsToday, setTrandingsToday] = useState([]);
    const [status, setStatus] = useState('ok');
    const [errorDescription, setErrorDescription] = useState('');

    const getTrendingToday = () => {
        movieServiceApi
            .getTrending()
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => setTrandingsToday(data.results))
            .catch(error => {
                setErrorDescription(error.message);
                setStatus('error');
            });
    };
    useEffect(getTrendingToday, []);

    return (
        <section className={css.home}>
            <h1 className={css.title}>Trending today</h1>
            {status === 'ok' && <MovieList moviesList={trendingsToday} />}
            {status === 'error' && (
                <ErrorMessageBlock errorDescription={errorDescription} />
            )}
        </section>
    );
}
