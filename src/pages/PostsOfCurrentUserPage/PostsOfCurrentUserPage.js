import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {UsersService} from '../../services';
import {PostsOfCurrentUser} from "../../components";

const PostsOfCurrentUserPage = () => {
    const [postsOfCurrentUser, setPostsOfCurrentUser] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        UsersService.getPosts(id).then(({data}) => setPostsOfCurrentUser(data));
    }, [id]);

    return (
        <div style={{maxWidth: '500px'}}>
            {
                postsOfCurrentUser.map(post => <PostsOfCurrentUser key={post.id} post={post}/>)
            }
        </div>
    );
};

export {
    PostsOfCurrentUserPage
};