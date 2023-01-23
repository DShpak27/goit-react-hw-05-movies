import React from 'react';
import propTypes from 'prop-types';
import css from './Main.module.scss';

export default function Main({ children }) {
    return <main className={css.main}>{children}</main>;
}

Main.propTypes = {
    children: propTypes.any,
};
