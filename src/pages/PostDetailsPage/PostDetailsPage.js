import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {PostDetails} from '../../components';
import {PostsService} from '../../services';

const PostDetailsPage = () => {
    const [post, setPost] = useState(null);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            PostsService.getById(id).then(({data}) => setPost(data));
        } else {
            setPost(state);
        }
    }, [state, id]);

    return (
        <div>
            <div style={{maxWidth: '500px'}}>
                {post && <PostDetails key={post.id} post={post}/>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    PostDetailsPage
};