import React, { Component } from 'react';
import Form from '../Form';


export default class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing
            }
        })

    }

    render() {
        let { firstName, lastName, living, bountyAmount, race, bountyDelete, _id, bountyEdit } = this.props;

        return (

            <div className='bounty-wrapper'>
                <div className='info-display-wrapper'>
                    <p className='full-name-disp'>Name: {firstName} {lastName}</p>
                    <p className='living'>Alive?: {living}</p>
                    <p className='bountyAmount-disp'>Bounty: {bountyAmount}</p>
                    <p className='race'>Race: {race}</p>
                    <button className='delete' type='button' onClick={() => { bountyDelete(_id) }}>X</button>
                    <button className='edit' type='button' onClick={() => { bountyEdit(_id); this.toggleDisplay() }}>Edit</button>
                    <div style={{display: this.state.isEditing ? 'initial' : 'none'}}>
                        <Form submit={bountyEdit} id={_id}></Form>
                    </div>
                </div>
            </div>
        );
    }
}
