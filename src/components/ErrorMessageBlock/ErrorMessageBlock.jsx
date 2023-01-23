import React from 'react';
import propTypes from 'prop-types';
import css from './ErrorMessageBlock.module.scss';

function ErrorMessageBlock({ errorDescription }) {
    return (
        <p className={css.errorMessage}>
            An error occurred!
            <br />
            Type of error: '{errorDescription}'.
            <br />
            Try again later...
        </p>
    );
}

ErrorMessageBlock.propTypes = {
    errorDescription: propTypes.string.isRequired,
};

export default ErrorMessageBlock;
