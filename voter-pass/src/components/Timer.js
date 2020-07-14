import React,{Component} from "react";
import List from './List'
import Average from './Average'

class Timer extends Component{ 

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
          this.setState({listOfTimes:list})
      };

      clearList = () => {
        let temp = [];
        this.setState({listOfTimes:temp});          
      };      

      render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);     
        return (
          <div className="Stopwatch">Timer

            <div className = 'list'>
              <table className = "time-table">
                <List items = {this.state.listOfTimes}></List>
              </table>                 
                <button onClick={this.clearList}>Clear List</button>
            </div>

            


            <div className="Stopwatch-display">
                {minutes} : {seconds} 
            </div>
            {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}>Start</button>
            )}
            {this.state.timerOn === true && (
                <button onClick={this.stopTimer}>Stop</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.startTimer}>Resume</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}>Reset</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.storeTime}>Submit</button>
             )}<div className = 'average'>
                <div>Average Time per Voter</div>                
                <Average items = {this.state.listOfTimes}>
                </Average>
            </div>
            </div>
          
        );
      }
}

export default Timer;