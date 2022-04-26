import {useDispatch, useSelector} from 'react-redux';

import {dec, inc, reset} from './redux';

function App() {
    const {counter} = useSelector(state => state.CounterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(inc())}>INC</button>
            <button onClick={() => dispatch(dec())}>DEC</button>
            <button onClick={() => dispatch(reset({number: 10}))}>RESET</button>
        </div>
    );
}

export default App;
