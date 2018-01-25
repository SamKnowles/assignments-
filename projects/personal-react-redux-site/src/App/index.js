import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../pages/Home';
import GreatJokes from '../pages/GreatJokes';
import Jokes from '../Jokes';

function App(props) {
    return (
        <div className='app-wrapper'>
        <Navbar />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/greatjokes' component={GreatJokes}></Route>
                <Route path='/jokes/:id' component={Jokes}></Route>
            </Switch>
        </div>
    )
}

export default App;