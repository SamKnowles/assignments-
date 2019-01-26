import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(prop) {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
        </div>
    )
}

export default Navbar;