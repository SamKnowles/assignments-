import React, { Component } from 'react'
import axios from 'axios';

const colorURL = 'http://www.colr.org/json/color/random'

export default class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor = 'white'
        }
        this.backgroundColor = this.backgroundColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.backgroundColor();
    }
    getBackgroundColor() {
        axios.get(colorURL)
        .then(response => {
            let color = response.date.color[0].hex;
            this.setState({
                backgroundColor = color;
            })
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



