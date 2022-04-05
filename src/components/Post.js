import React from 'react';

const Post = ({post:{userId, id, title}}) => {
    return (
        <div>
            {userId}---{id}---{title}
        </div>
    );
};

export default Post;