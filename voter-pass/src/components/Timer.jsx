import React,{Component} from "react";

class Timer extends Component{
    state = {
        date:new Date()
    };

    callMe(){
        setInterval(()=>{
            this.setState({date:new Date()});
        }, 1000);
    }
    render(){
        return(
            <div className="App">
                <h3>Current time: {this.state.date.toLocaleTimeString()}</h3>
                <h3>Average Time: (Whatever that average is)</h3>
                {this.callMe()}
            </div>

        );
    }
}

export default Timer;