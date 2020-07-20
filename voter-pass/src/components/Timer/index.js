import React, { Component } from "react";

import './index.css';
import Button from 'react-bootstrap/Button';

import List from '../List'
import Average from '../Average'

class Timer extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    listOfTimes: [],
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  storeTime = () => {
    const list = [...this.state.listOfTimes, this.state.timerTime]
    this.setState({ listOfTimes: list })
  };

  clearList = () => {
    let temp = [];
    this.setState({ listOfTimes: temp });
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
      <div className="timer">
        <div className="stopwatch-display">
          <div>
            Timer
                  <br></br>
            {minutes} : {seconds}
          </div>

          <div className="buttons-row-1">
            {this.state.timerOn === false && this.state.timerTime === 0 && (
              <Button variant="success" onClick={this.startTimer}>Start</Button>
            )}
            {this.state.timerOn === true && (
              <Button variant="danger" onClick={this.stopTimer}>Stop</Button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <Button variant="dark" onClick={this.startTimer}>Resume</Button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <Button variant="dark" onClick={this.resetTimer}>Reset</Button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <Button variant="dark" onClick={this.storeTime}>Add to List</Button>
            )}
          </div>

          <div className="buttons-row-2">
            {this.state.listOfTimes.length > 0 && (
              <Button variant="dark" onClick={this.clearList}>Clear List</Button>
            )}
          </div>
        </div>

        <Average items={this.state.listOfTimes} />

        <List items={this.state.listOfTimes} />
      </div>
    );
  }
}

export default Timer;