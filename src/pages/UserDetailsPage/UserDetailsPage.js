import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {UsersService} from '../../services';
import {UserDetails} from '../../components';

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            UsersService.getById(id).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [state, id]);

    return (
        <div>
            {user && <UserDetails key={user.id} user={user}/>}<br/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPage
};