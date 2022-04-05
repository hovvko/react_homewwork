import React from 'react';

const Comment = ({comment:{postId, id, name, email}}) => {
    return (
        <div>
            {postId}---{id}---{name}---{email}
        </div>
    );
};

export default Comment;