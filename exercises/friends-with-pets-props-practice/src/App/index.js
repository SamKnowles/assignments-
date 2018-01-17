import React from 'react';
import friendzies from './friends.json';
import Friends from './Friends/index.js';

function App(props) {
    return (
        <div>
            {friendzies.map((pals) => {
                return <Friends {...pals}></Friends>
            })}
        </div>
    )
}

export default App;
