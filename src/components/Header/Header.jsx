import React from 'react';
import css from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const makeLinkStyle = ({ isActive }) =>
    isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink;

export default function Header() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink className={makeLinkStyle} to="/">
                    Home
                </NavLink>
                <NavLink className={makeLinkStyle} to="/movies">
                    Movies
                </NavLink>
            </nav>
        </header>
    );
}
