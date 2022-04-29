import {Route, Routes} from 'react-router-dom';

import {TopForm} from './layouts';
import {CarDetailsPage, CarsPage} from './pages';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<TopForm/>}>
                <Route index element={<CarsPage/>}/>
                <Route path={'cars/:id'} element={<CarDetailsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
