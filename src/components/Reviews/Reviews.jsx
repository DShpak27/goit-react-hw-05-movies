import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessageBlock from '../../components/ErrorMessageBlock/ErrorMessageBlock.jsx';
import ReviewList from '../../components/ReviewList/ReviewList.jsx';
import movieServiceApi from '../../services/searchService.js';
import css from './Reviews.module.scss';

export default function Reviews() {
    const { movieId } = useParams();
    const [movieReviews, setMovieReview] = useState([]);
    const [status, setStatus] = useState('indefined');
    const [errorDescription, setErrorDescription] = useState('');

    const getMovieReviews = movieId => {
        movieServiceApi
            .getReviewsById(movieId)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                if (data.results.length) {
                    setMovieReview(data.results);
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
        getMovieReviews(movieId);
    }, [movieId]);
    return (
        <>
            {status === 'ok' && <ReviewList movieReviews={movieReviews} />}
            {status === 'nothing found' && (
                <p className={css.nothingFoundText}>
                    We don't have avy reviews for this movie!
                </p>
            )}
            {status === 'error' && (
                <ErrorMessageBlock errorDescription={errorDescription} />
            )}
        </>
    );
}
