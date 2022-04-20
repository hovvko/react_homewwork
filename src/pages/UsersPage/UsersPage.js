import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {UsersService} from '../../services';
import {User} from '../../components';
import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={css.users}>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    UsersPage
};