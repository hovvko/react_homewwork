import {Route, Routes} from 'react-router-dom';

import {TopMenu} from './layouts';
import {
    CommentsOfCurrentPostPage,
    PostDetailsPage,
    PostsOfCurrentUserPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from './pages';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<TopMenu/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<PostsOfCurrentUserPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<CommentsOfCurrentPostPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
