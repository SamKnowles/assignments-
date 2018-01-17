import React from 'react'

function Vacation(props) {
    let { place, price, timeToGo } = props;
    return (
        <div>
            <h1>{place}</h1>
            <h2>{price}</h2>
            <h3>{timeToGo}</h3>
        </div>
    )
}

export default Vacation;
