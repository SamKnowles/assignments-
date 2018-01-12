import React, { Component } from 'react';
import Body from "./Body";
import "./index.css";



function App(props) {
    return (
        <div className="boxwrapper">
            <Body
                parentStyle ={{ backgroundColor: "yellow" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "pink" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "hotpink" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "lightblue" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "orange" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "green" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "silver" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "purple" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
            <Body
                parentStyle ={{ backgroundColor: "yellow" }}
                title = 'WINNER'
                subtitle = 'Just kidding'
                information= 'Ben is great.  Ben has a hat. Phone is ringing.'
            ></Body>
        </div>
    )
}

export default App;