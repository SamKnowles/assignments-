import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.clicky = this.clicky.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    handleChange(e) {
        this.setState({ name: e.target.value })
    }

    clicky(e) {
        e.preventDefault();
        let { name } = this.state;
        this.setState((prevState) => {
            return {
                list: [...prevState.list, name]

            }
        });
        this.clearInputs();
    }

    clearInputs() {
        this.setState({ name: "" });
    }

    render() {
        let { name, list } = this.state;
        return (
            <form onSubmit={this.clicky}>
                <input onChange={this.handleChange} type="text" value={name} />
                <h1>{name}</h1>
                <button>Click ME</button>
                <ol>
                    {list.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })}
                </ol>
            </form>
        )
    }
}
