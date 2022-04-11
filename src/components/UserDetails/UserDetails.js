import React from 'react';

const UserDetails = ({user: {id, name, username, email, phone, website, address: {street, city}}, getPosts}) => {
    return (
        <div>
            {id}<br/>
            {name}<br/>
            {username}<br/>
            {email}<br/>
            {phone}<br/>
            {website}<br/>
            {street}<br/>
            {city}<br/>
            <button onClick={()=> getPosts(id)}>GET POSTS</button>
        </div>
    );
};

export default UserDetails;