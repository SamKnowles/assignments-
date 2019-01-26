import React from 'react';
import Projects from './Projects';
import background from './images/backgroundSam.png';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <div className='background-image'>
                <div className='words-wrapper'>
                    <h1>Samuel Knowles</h1>
                    <h1>Programmer Extraordinaire</h1>
                    <h1>Hit me up!</h1>
                    <h1>385-528-6030</h1>
                </div>
            </div>
            <Projects></Projects>
        </div>
    )
}

export default App
