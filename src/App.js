import {CatForm, DogForm, Dogs} from './components';
import {Cats} from './components';

function App() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CatForm/>
                <DogForm/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
}

export default App;
