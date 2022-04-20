import React from 'react';
import {Link} from 'react-router-dom';

const UserDetails = ({user: {id, name, username, email, phone, website}}) => {
    return (
        <div>
            id: {id}<br/>
            name: {name}<br/>
            username: {username}<br/>
            email: {email}<br/>
            phone: {phone}<br/>
            website: {website}<br/>
            <br/>
            <Link to={'posts'}>
                <button>GET POSTS</button>
            </Link>
        </div>
    );
};

export {
    UserDetails
};