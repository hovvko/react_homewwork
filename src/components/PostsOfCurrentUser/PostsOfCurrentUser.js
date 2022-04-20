import React from 'react';

const PostsOfCurrentUser = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            userId: {userId}<br/>
            id: {id}<br/>
            title: {title}<br/>
            body: {body}<br/>
            <br/>
        </div>
    );
};

export {
    PostsOfCurrentUser
};