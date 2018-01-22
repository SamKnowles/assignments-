import React, { Component } from "react";
import "./index.css";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            // counter: 0,
            color: "yellow"
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.reset = this.reset.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    // handleClick(e) {
    //     let name = e.target.name;
    //     this.setState((prevState) => {
    //         return {
    //             counter: name === "add" ? prevState.counter + 1 : prevState.counter - 1
    //         }
    //     })
    // }
    // reset() {
    //     this.setState({
    //         counter: 0
    //     })
    // }
    changeColor() {
        axios.get('http://www.colr.org/json/color/random')
            .then(response => {
                let {hex} = response.data.colors[0];
                let { color } = this.state;
                this.setState({
                    color: `#${hex}`
                })
            })

    }


    render() {
        let { color } = this.state;
        let boxStyle = { backgroundColor: color }
        return (
            <div>
                {/* <button name="add" onClick={this.handleClick}>Add!</button>
                <button name="subtract" onClick={this.handleClick}>Subtract!</button>
                <p>{counter}</p>
                <button onClick={this.reset}>Reset</button> */}
                <div style={boxStyle} className="box" onMouseOver={this.changeColor} onMouseOut={this.changeColor}>
                </div>
            </div>
        )
    }
}

export default App;