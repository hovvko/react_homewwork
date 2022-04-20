import React from 'react';
import {Link} from 'react-router-dom';

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            <br/>
            {id}---{name}---{username}
            <Link to={id.toString()} state={user}>
                <button style={{marginLeft: '10px'}}>GET DETAILS</button>
            </Link>
        </div>
    );
};

export {
    User
};