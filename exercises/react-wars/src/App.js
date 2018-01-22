import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Person from './Person';
import SideBar from './SideBar';
import './App.css';
import './SideBar.css';



function App(props) {
    return (
        <div className='app-wrapper'>

            <SideBar />
            <Switch>
                <Route path='/person/:id' component={Person} />
            </Switch>

        </div>
    )
}

export default App;
