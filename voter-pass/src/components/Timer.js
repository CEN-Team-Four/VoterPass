import React,{Component} from "react";


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
        let temp = this.state.listOfTimes;
        if(temp.length === 0){
          temp += this.state.timerTime;
          this.setState({listOfTimes:temp});
        }
        else{
          temp += ', ' +this.state.timerTime;
        this.setState({listOfTimes:temp});
        }       
      };

      clearList = () => {
        let temp = [];
        this.setState({listOfTimes:temp});               
      };


      render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
          <div className="Stopwatch">
            <div className="Countdown-header">Timer</div>
            <div className="Stopwatch-display">
                {hours} : {minutes} : {seconds} 
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
             )}

           
              <div className = 'list'>
                {this.state.listOfTimes}
                <br></br>
                  <button onClick={this.clearList}>Clear List</button>
                
              </div>


          </div>
          
        );
      }
}

export default Timer;