import React, { Component } from "react";
import "./index.css";
import heros from "./heros.json";
import SuperHeros from "./SuperHeros";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            heros: heros
        }
        this.display = this.display.bind(this);
    }
    display(i) {
        alert(this.state.heros[i].catchphrase);
    }
    render() {
        let { heros } = this.state;
        return (
            <div>
                {heros.map((hero, index) => {
                    return <SuperHeros key={index}{...hero} index={index} display={this.display} />
                })}
            </div>
        )
    }
}

export default App;