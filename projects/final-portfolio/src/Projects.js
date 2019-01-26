import React from 'react';
import jokes from './images/jokes.png';
import wink from './images/wink.png';
import game from './images/game.png';
import './Projects.css';


function Projects() {
    return (

        <div className='project-pictures-wrapper'>
            <div className='pic-wrapper' style={{ backgroundImage: `url(${jokes})` }}></div>
            <div className='pic-wrapper' style={{ backgroundImage: `url(${game})` }}></div>
            <div className='pic-wrapper' style={{ backgroundImage: `url(${wink})` }}></div>
        </div>

    )
}

export default Projects
