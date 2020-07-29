import React, { Component } from "react";
import TimeTable from '../TimeTable';
import './index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

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
    //times: this.initializeTimeslots(),
    available: []
  };
}
/*
  state = {
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
     //times: this.initializeTimeslots(),
     available: []
   };
*/
/*
  initializeTimeslots () {
    if(!(localStorage.getItem('timeslots') === null)){
      let items = JSON.parse(localStorage.getItem('timeslots'))
      return items;
    }
    else{
      return [];
    }
  }
*/
  handleChange = event => {
    this.setState({
      Location: event.target.value
  });
};
/*!this.state.Location || !this.state.startTime || !this.state.endTime || !this.state.duration || !this.state.numBooths*/
  validate = () => {
    if (!this.state.Location || !this.state.startTime || !this.state.endTime || !this.state.duration || !this.state.numBooths) {
      alert('Please fill out the entire form');
      return false;
    }
    else {

    }
    return true;
  }

  handleSubmit = (event) => {

   if (this.validate()) {
     //let temp = [];
     this.setState({times:[]});
     this.setState({available:[]});
     localStorage.removeItem('timeslots');
     localStorage.removeItem('availability');

     if(this.state.startTime.includes('PM'))
     {
       this.state.cur = 'PM';
       this.state.startTime.replace('PM','');
       let s = this.state.startTime.split(':',2);
       this.state.startHour = parseInt(s[0]);
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
   let numSlots = total/this.state.duration + 1;
    let curHour = this.state.startHour;
    let curMin = this.state.startMin;
    console.log(this.state.numBooths);
    if (curMin < 10)
      this.state.times.push(curHour + ':0' + curMin + this.state.cur);
    else
      this.state.times.push(curHour + ':' + curMin + this.state.cur);

    // this.state.available.push(this.state.numBooths);
    this.state.times.push()
    for (let i = 0; i < numSlots ; i++) {
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

    event.preventDefault();
  }
 };

  render() {
    return(
      <div className="newtable">
        <div className="form-wrapper">
          <h1>Create New Table</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="loc">
          <label>Enter Date: </label>
          <input
            type = 'text'
            value={this.state.Location}
            onChange={event => this.setState({ Location: event.target.value })}
          />
          </div>
          <div className="textbox">
          <label htmlFor="start">Start Time: </label>
          <input
            type = 'text'
            placeholder = 'eg. 8:00AM'
            value={this.state.startTime}
            onChange={event => this.setState({ startTime: event.target.value })}
          />

          <label htmlFor="end">End Time: </label>
          <input
            type = 'text'
            value={this.state.endTime}
            onChange={event => this.setState({ endTime: event.target.value })}
          />

          <label>Duration per timeslot: </label>
          <input
            type = 'text'
            placeholder = 'Minutes'
            value={this.state.duration}
            onChange={event => this.setState({ duration: event.target.value })}
          />

          <label>Availability: </label>
          <input
            type = 'text'
            value={this.state.numBooths}
            onChange={event => this.setState({ numBooths: event.target.value })}
          />
          </div>

          <div className = "btns">
          <button type="submit">submit</button>
          <Button variant="dark" href="/">Go to Table</Button>
          </div>
          </form>
          </div>
      </div>
    );

  }
}

export default NewTable;
