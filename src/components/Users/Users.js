import React, {useEffect, useState} from 'react';

import {PostsServices, UsersService} from '../../services';
import css from './Users.module.css';
import User from '../User/User';
import UserDetails from '../UserDetails/UserDetails';
import Post from '../Post/Post';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        UsersService.getAll().then(({data}) => setUsers(data));
    }, []);

    function chosenUser(id) {
        UsersService.getById(id).then(({data}) => setUser(data));
        setPosts([])
    }

    function getPosts(id) {
        PostsServices.getUsersPostsById(id).then(({data})=> setPosts(data));
    }

    return (
        <div>
            <div className={css.flex}>
                <div>
                    {
                        users.map(user => <User key={user.id} user={user} chosenUser={chosenUser}/>)
                    }
                </div>
                <div>
                    {
                        user && <UserDetails key={user.id} user={user} getPosts={getPosts}/>
                    }
                </div>
            </div>
            <hr/>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Users;