import React from 'react';
import {addJoke} from '../../Jokes';

function GreatJokes(props) {
    return (
        <div>
            
        </div>
    )
}


function mapStateToProps(state) {
    return {
        jokes: state.jokes,
    }
}

export default connect(mapStateToProps, { addJoke })(GreatJokes);

