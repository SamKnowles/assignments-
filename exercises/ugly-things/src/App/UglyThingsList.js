import React from 'react';
import UglyThing from './UglyThing';
import {connect} from 'react-redux';

function UglyThingsList(props) {
    return (
        <div>
            UglyThings
        </div>
    )
}

function mapStateToProps(state) {
    return {
        uglyThings: state
    }
}    

export default connect(mapStateToProps, {})(UglyThingsList);
