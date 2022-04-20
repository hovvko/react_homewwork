import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <br/>
            {id}---{title}
            <Link to={id.toString()} state={post}>
                <button style={{marginLeft: '10px'}}>GET DETAILS</button>
            </Link>
        </div>
    );
};

export {
    Post
};