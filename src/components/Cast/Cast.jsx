import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieServiceApi from '../../services/searchService.js';
import ErrorMessageBlock from '../../components/ErrorMessageBlock/ErrorMessageBlock.jsx';
import CastList from '../CastList/CastList.jsx';
import css from './Cast.module.scss';

export default function Cast() {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);
    const [status, setStatus] = useState('indefined');
    const [errorDescription, setErrorDescription] = useState('');

    const getMovieCast = id => {
        movieServiceApi
            .getCast(id)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                if (data.cast.length) {
                    setMovieCast(data.cast);
                    setStatus('ok');
                } else {
                    setStatus('nothing found');
                }
            })
            .catch(error => {
                setErrorDescription(error.message);
                setStatus('error');
            });
    };

    useEffect(() => {
        getMovieCast(movieId);
    }, [movieId]);

    return (
        <>
            {status === 'ok' && <CastList movieCast={movieCast} />}
            {status === 'nothing found' && (
                <p className={css.nothingFoundText}>
                    We don't have avy cast information for this movie.
                </p>
            )}
            {status === 'error' && (
                <ErrorMessageBlock errorDescription={errorDescription} />
            )}
        </>
    );
}
