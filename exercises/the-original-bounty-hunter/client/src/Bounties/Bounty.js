import React from 'react';


function Bounty(props) {
    // let { firstName, lastName, living, bountyAmount, race } = props;
    // this.state = {
    //     bounty: {
    //         firstName,
    //         lastName,
    //         living,
    //         bountyAmount,
    //         race
    //     },
    // }
    let { firstName, lastName, living, bountyAmount, race, bountyDelete, _id } = props;
    return (
        <div className='bounty-wrapper'>
            <div className='info-display-wrapper'>
                <p className='full-name-disp'>Name: {firstName} {lastName}</p>
                <p className='living'>Alive?: {living}</p>
                <p className='bountyAmount-disp'>Bounty: {bountyAmount}</p>
                <p className='race'>Race: {race}</p>
                <button className='delete' type='button' onClick={() => {bountyDelete(_id)}}>X</button>
            </div>
        </div>
    );
}

export default Bounty;