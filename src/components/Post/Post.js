import React from 'react';

const Post = ({post:{userId, id, title, body}}) => {
    return (
        <div>
            {userId}<br/>
            {id}<br/>
            {title}<br/>
            {body}
        </div>
    );
};

export default Post;