import React, { Component } from 'react';
import axios from 'axios';
import Bounties from './Bounties/Bounties'

export default class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:8000/bounty')
        .then((response) => {
            console.log(response.data);
        })
    }
    render() {
        return (
            <div>
                <Bounties></Bounties>
            </div>
        )
    }
}
