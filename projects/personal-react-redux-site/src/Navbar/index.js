import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

function Navbar(props) {
    return (
        <div className='nav-wrapper'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/greatJokes'>Great Jokes</Link>
        </div>
    )
}

export default Navbar;
