
import React, { Component } from 'react';
import './badge.css';

export default class Badge extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, email, birthPlace, phone, favFood, bio } = props;
        this.state = {
            badge: {
                firstName,
                lastName,
                email,
                birthPlace,
                phone,
                favFood,
                bio
            },
            backgroundColor: props.backgroundColor
        }
    }
    render() {
        let { firstName, lastName, email, birthPlace, phone, favFood, bio } = this.state.badge;
        let color = this.state.backgroundColor;
        let style = { backgroundColor: color };
        return (
            <div className='badge-wrapper'>
                <div className='badge-banner' style={style}>HELLO</div>
                <div className='info-disp-wrapper'>
                    <p className='full-name-disp'>Name: {firstName} {lastName}</p>
                    <p className='phone-disp'>Phone: {phone}</p>
                    <p className='birthplace-disp'>Place of Birth: {birthPlace}</p>
                    <p className='food-disp'>Favorite Food: {favFood}</p>
                    <p className='email-disp'>Email: {email}</p>
                </div>
                <div className='bio-disp'>{bio}</div>
            </div>
        );
    }
}