import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {PostsService} from '../../services';
import {Post} from '../../components';
import css from './PostsPage.module.css';


const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostsService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={css.posts}>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    PostsPage
};