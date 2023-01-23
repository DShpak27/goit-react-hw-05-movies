import propTypes from 'prop-types';
import css from './CastList.module.scss';

export default function CastList({ movieCast }) {
    return (
        <ul className={css.castList}>
            {movieCast.map(actor => {
                return (
                    <li className={css.castListItem} key={actor.id}>
                        <p className={css.actorName}>{actor.name}</p>
                        <p className={css.actorCharacter}>
                            Character: {actor.character}
                        </p>
                        <div className={css.fotoWrapper}>
                            <img
                                className={css.foto}
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt="actor foto"
                            />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

CastList.propTypes = {
    movieCast: propTypes.array.isRequired,
};
