import React from 'react';
import Jokes from '../../Jokes'
import './index.css'
import mintwo from '../../images/twoMinions.jpg'

function Home(props) {
    return (
        <div className='home-wrapper'>
            <div className='jokes-wrapper'>
                <Jokes></Jokes>
            </div>
        </div>
    )
}

export default Home;
