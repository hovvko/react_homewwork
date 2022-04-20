import React from 'react';

const CommentsOfCurrentPost = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div>
            <br/>
            postId: {postId}<br/>
            id: {id}<br/>
            name: {name}<br/>
            email: {email}<br/>
            body: {body}<br/>
        </div>
    );
};

export {
    CommentsOfCurrentPost
};