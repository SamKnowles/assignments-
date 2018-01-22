import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Class case component for two reasons:

// 1. State Change

// 2. Using life cycle methods, like 'componentDidMount();

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                this.setState({
                    people: response.data.results
                })
            });
    }

    render() {
        const peopleList = this.state.people.map((person, index) =>
            <Link 
                to={`/person/${index + 1}`}
                key={index + person.name}>{person.name}
            </Link>
            )
        return (
            <div className='list-wrapper'>
                {peopleList}
            </div>
        )
    }
}

export default SideBar;
