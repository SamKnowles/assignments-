import React from 'react';
import Jokes from '../../Jokes'
import './index.css'

function Home(props) {
    return (
        <div className='home-wrapper'>
            <Jokes></Jokes>
        </div>
    )
}

export default Home;
