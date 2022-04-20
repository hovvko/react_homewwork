import React from 'react';
import {Link, Outlet} from 'react-router-dom';

import css from './TopMenu.module.css';

const TopMenu = () => {
    return (
        <div>
            <div className={css.topMenu}>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <br/>
            <Outlet/>
        </div>
    );
};

export {
    TopMenu
};