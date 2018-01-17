import React from 'react';
import vacationSpots from "./info.json";
import Vacation from "./Vacation";

function App(props) {
    return (
        <div>
            {vacationSpots.map((card) => {
                return <Vacation {...card}></Vacation>
            })}
        </div>
    )
}

export default App
