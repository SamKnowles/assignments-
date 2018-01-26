import React from 'react';
import { connect } from "react-redux";
import laugh from '../../images/laughing.gif';
import leftMinion from '../../images/TransparentMinionThree.png';
import rightMinion from '../../images/TransparentMinionOne.png';
import './index.css';


function GreatJokes(props) {
    let seven = props.jokes
    const jokeList = seven.map((joke) => {
        return <li>{joke}</li>
    })
    return (
        <div className='greatJokes-wrapper'>

            <div className='duck-smile-wrapper'>
                <img className='duckSmile' src={laugh} />
            </div>

            <div className='joke-list-wrapper'>
                <img id='leftMinion' src={leftMinion} />
                <ul>{jokeList}</ul>
                <img id='rightMinion' src={rightMinion} />
            </div>


        </div>
    )
}


function mapStateToProps(state) {
    return {
        jokes: state.jokes
    }
}

export default connect(mapStateToProps, {})(GreatJokes);

