import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';

class NewTable extends Component{
  constructor(props) {
  super(props);
  this.state = {
    date: new Date().toLocaleString(),
    Location: '',
    startTime: '',
    startHour: '',
    startMin: '',
    endTime: '',
    endHour: '',
    endMin: '',
    cur: '',
    numBooths:'',
    duration:'',
    times: [],
    available: [],
    average: this.initializeAve(),
    submitted: false
  };
}

  handleChange = event => {
    this.setState({
      Location: event.target.value
  });
};

  initializeAve = () =>{
    let test = 'test', myBool;
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        myBool = true;
    } catch(e) {
        myBool = false;
    }
    if(myBool === false){
        alert('Please enable cookies.')
        return 'N/A';
    }
    else{
        if(!(localStorage.getItem('average') === null)){
            let items = JSON.parse(localStorage.getItem('average'))
            let seconds = ("0" + (Math.floor(items / 1000) % 60)).slice(-2);
            let minutes = ("0" + (Math.floor(items / 60000) % 60)).slice(-2);
            let str = minutes + ':' + seconds
            return str;
        }
        else{
            return 'N/A';
        }
    }
  }

  validate = () => {
    if (!this.state.startTime || !this.state.endTime || !this.state.duration || !this.state.numBooths) {
      alert('Please fill out the entire form');
      return false;
    }
    else {

    }
    return true;
  }

  handleSubmit = (event) => {

   if (this.validate()) {
     alert("A new table was created");
     this.setState({times:[]});
     this.setState({available:[]});
     localStorage.removeItem('timeslots');
     localStorage.removeItem('availability');
     var curHour = 0;
     if(this.state.startTime.includes('PM'))
     {
       this.state.cur = 'PM';
       this.state.startTime.replace('PM','');
       let s = this.state.startTime.split(':',2);
       this.state.startHour = parseInt(s[0]);
       curHour = this.state.startHour;
       if (this.state.startHour < 12)
          this.state.startHour += 12;
       this.state.startMin = parseInt(s[1]);
     }
     else
     {
       this.state.cur = 'AM';
       this.state.startTime.replace('AM','');
       let s = this.state.startTime.split(':',2);
       this.state.startHour = parseInt(s[0]);
       curHour = this.state.startHour;
       if (this.state.startHour === 12)
          this.state.startHour -= 12;
       this.state.startMin = parseInt(s[1]);
     }
     if(this.state.endTime.includes('PM'))
     {
       this.state.endTime.replace('PM','');
       let s = this.state.endTime.split(':',2);
       this.state.endHour = parseInt(s[0]);
       if (this.state.endHour < 12)
          this.state.endHour += 12;
       this.state.endMin = parseInt(s[1]);
     }
     else
     {
       this.state.endTime.replace('AM','');
       let s = this.state.endTime.split(':',2);
       //console.log(s[0]);
       this.state.endHour = parseInt(s[0]);
       if (this.state.endHour === 12)
          this.state.endHour -= 12;
       this.state.endMin = parseInt(s[1]);
     }
     let hrs = this.state.endHour - this.state.startHour;
     if (hrs < 0) {
        hrs = hrs + 24;
    }
    let mins = this.state.endMin - this.state.startMin;
    if (mins < 0) {
       mins = mins + 60;
       hrs = hrs - 1;
   }
   let total = 60 * hrs + mins;
   let numSlots = total/this.state.duration + 1
    let curMin = this.state.startMin;
    console.log(this.state.numBooths);

    if (curMin < 10)
      this.state.times.push(curHour + ':0' + curMin + this.state.cur);
    else
      this.state.times.push(curHour + ':' + curMin + this.state.cur);

    this.state.available.push(this.state.numBooths);
    this.state.times.push()
    for (let i = 0; i < numSlots - 1; i++) {
      this.state.available.push(this.state.numBooths);
      curMin += parseInt(this.state.duration);
      if (curMin >= 60) {
        curMin -= 60;
        curHour++;
        if (curHour === 12) {
          if (this.state.cur === 'AM')
            this.state.cur = 'PM';
          else
            this.state.cur = 'AM';
        }
        if (curHour > 12)
          curHour -= 12;
      }
      if (curMin < 10)
        this.state.times.push(curHour + ':0' + curMin + this.state.cur);
      else
        this.state.times.push(curHour + ':' + curMin + this.state.cur);
    }
    localStorage.setItem('timeslots', JSON.stringify(this.state.times));
    localStorage.setItem('availability', JSON.stringify(this.state.available));

    console.log(this.state.times);
    console.log(this.state.available);

    this.setState({submitted: true});
    event.preventDefault();
  }
  event.preventDefault();  
 };

  render() {
    return(
      <div className="newtable">
        <div className="form-wrapper">
          <h1>Create New Table</h1>
          <form onSubmit={this.handleSubmit}>
          {/* <div className="loc">
          <label>Enter Date: </label>
          <input
            type = 'text'
            value={this.state.Location}
            onChange={event => this.setState({ Location: event.target.value })}
          />
          </div> */}

          <br></br>
          <div className="textbox">
          <label htmlFor="start">Start Time: </label>
          <input
            type = 'time'
            value={this.state.startTime}
            onChange={event => this.setState({ startTime: event.target.value })}
          />

          <br></br>
          <label htmlFor="end">End Time: </label>
          <input
            type = 'time'
            value={this.state.endTime}
            onChange={event => this.setState({ endTime: event.target.value })}
          />

          <br></br>
          <label>Duration per Timeslot: </label>
          <input
            type = 'number'
            min = '0' 
            value={this.state.duration}
            onChange={event => this.setState({ duration: event.target.value })}
          /> <p>average: {this.state.average}</p>

          <label>Availability per Timeslot: </label>
          <input
            type = 'number'
            min = '0'
            value={this.state.numBooths}
            onChange={event => this.setState({ numBooths: event.target.value })}
          />

          <Button variant="success" type="submit">Submit</Button>
          <Button variant="dark" href="/">Return to Table</Button>
          {this.state.submitted === true &&  (
              <Redirect to="/" />
          )}

          </div>
          </form>
          </div>

      </div>
    );

  }
}

export default NewTable;
