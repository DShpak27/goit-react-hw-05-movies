import propTypes from 'prop-types';
import css from './ReviewList.module.scss';

export default function ReviewList({ movieReviews }) {
    return (
        <ul className={css.reviewsList}>
            {movieReviews.map(review => {
                return (
                    <li key={review.id} className={css.reviewsListItem}>
                        <p className={css.reviewAuthor}>
                            Author: {review['author_details'].username}
                        </p>
                        <p className={css.reviewText}>{review.content}</p>
                    </li>
                );
            })}
        </ul>
    );
}

ReviewList.propTypes = {
    movieReviews: propTypes.array.isRequired,
};
