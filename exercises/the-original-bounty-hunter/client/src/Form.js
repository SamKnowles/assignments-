import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                living: '',
                bountyAmount: '',
                race: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);        
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                living: '',
                bountyAmount: '',
                race: ''
            },
        });
    }
        
    handleSubmit = (e) => {
        let { add, id } = this.props
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        }
        else {
            this.props.submit(this.state.inputs, id)
        }
    }


    render() {
        let { firstName, lastName, living, bountyAmount, race } = this.state.inputs;
        return (
            <form className='form-wrapper'>
                <div className='input-wrapper'>
                    <input onChange={this.handleChange} className='fName' type="text" placeholder='First Name' value={firstName} name='firstName' />
                    <input onChange={this.handleChange} className='lName' type="text" placeholder='Last Name' value={lastName} name='lastName' />
                    <input onChange={this.handleChange} className='living' type="text" placeholder='Living' value={living} name='living' />
                    <input onChange={this.handleChange} className='bountyAmount' type="text" placeholder='Bounty' value={bountyAmount} name='bountyAmount' />
                    <input onChange={this.handleChange} className='race' type="text" placeholder='Race' value={race} name='race' />
                </div>
                <button className='submit' type='submit' onClick={this.handleSubmit}>submit</button>
            </form>
        )
    }
}
