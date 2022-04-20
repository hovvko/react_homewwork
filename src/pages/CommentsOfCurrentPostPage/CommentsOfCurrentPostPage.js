import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {PostsService} from '../../services';
import {CommentsOfCurrentPost} from '../../components';

const CommentsOfCurrentPostPage = () => {
    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        PostsService.getComments(id).then(({data}) => setComments(data));
    }, [id]);

    return (
        <div style={{maxWidth: '500px'}}>
            {comments.map(comment => <CommentsOfCurrentPost key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    CommentsOfCurrentPostPage
};