import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePetPoint from './pages/CreatePetPoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/create-pet-point" component={CreatePetPoint} />
        </BrowserRouter>
    );
}

export default Routes;