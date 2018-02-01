import React, { Component } from 'react';
import Bounty from './Bounty';
import Form from '../Form';
import axios from 'axios'


export default class Bounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: [],
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.bountyDelete = this.bountyDelete.bind(this);
    }

    formSubmit(newBounty) {
        axios.post('http://localhost:8000/bounty', newBounty)
            .then((response) => {
                console.log(response);
                this.setState(prevState => {
                    let { bounties } = prevState;
                    return {
                        bounties: [...bounties, response.data],
                    };
                })

            });

    }

    bountyDelete(id) {
        let { bounties } = this.props;
        axios.delete('http://localhost:8000/bounty/' + id)
            .then(response => {
                for (const i = 0; i <= bounties.length; i++) {
                    if (bounties[i].id === id) {
                        this.setState(prevState => {
                            let { bounties } = prevState;
                            return {
                                bounties: [...bounties, response.data],
                            };
                        
            alert(`Bounty ${id} was successfully removed!`);
                    })
            .catch((err) => {
                console.error(err);
            })
    }
}

render() {
    let { bounties } = this.state;
    return (
        <div className='bounties-wrapper'>
            <Form submit={this.formSubmit}></Form>

            {bounties.map((bounty, index) => {
                return <Bounty {...bounty} key={index} bountyDelete={this.bountyDelete}></Bounty>;
            })}
        </div>
    )
}
}