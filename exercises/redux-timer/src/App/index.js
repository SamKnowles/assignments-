import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTime } from '../Redux/counter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null
    }
    this.startTimer = this.startTimer.bind(this);
  }
  startTimer() {
    this.setState({
      interval: setInterval(this.props.addTime, 10)
    })
  }
  displayTime() {
    let { addTime, counter } = this.props;
    let now = new Date(counter);
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let mils = now.getMilliseconds() / 10;
    return `${minutes}:${seconds}${mils}`;

  }

  render() {
    return (
      <div>
        {this.displayTime()}
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return { counter: state.counter }
  }

  export default connect(mapStateToProps, { addTime, stopTimer })(App);