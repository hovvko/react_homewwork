import React from 'react';
import {Link} from 'react-router-dom';

const PostDetails = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            userId: {userId}<br/>
            id: {id}<br/>title
            title: {title}<br/>
            body: {body}<br/>
            <br/>
            <Link to={'comments'}>
                <button>GET COMMENTS</button>
            </Link>
        </div>
    );
};

export {
    PostDetails
};