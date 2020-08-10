import React, { Component } from "react";

import { Link } from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class AssignTimeslot extends Component {
  state = {
    selected: this.initializeSelected(),
    expTime: this.initializeExpiration(),
    voterNum: this.initializeVoterNum()
  };

  initializeSelected() {
    for (let i = 0; i < this.props.timeSlots.length; i++) {
      if (this.props.availability[i] > 0)
        return this.props.timeSlots[i];
    }
  }

  initializeVoterNum() {
    for (let i = 0; i < this.props.timeSlots.length; i++) {
      if (this.props.availability[i] > 0)
        return this.props.availability[i];
    }
  }

  initializeExpiration() {
    return this.props.expTime;
  }

  myFunc() {

    var myVar = this.state.selected;
    var hours;
    var minutes;
    var hourInt;
    var minuteInt;
    var merid;

    if (myVar.charAt(1) == ":")
    {
      hours = myVar.substring(0,1)
      minutes = myVar.substring(2,4)
      merid = myVar.substring(4,6)
      hourInt = parseInt(hours)
      minuteInt = parseInt(minutes)
      this.setState({
        myNum: "THIS"
      });
      localStorage.setItem('minutes', JSON.stringify(minutes))
      localStorage.setItem('hours', JSON.stringify(hours))
      localStorage.setItem('meridian', JSON.stringify(merid))
    }
    else
    {
      hours = myVar.substring(0,2)
      minutes = myVar.substring(3,5)
      merid = myVar.substring(5,7)
      hourInt = parseInt(hours)
      minuteInt = parseInt(minutes)
      this.setState({
        myNum: "THAT"
      });
      localStorage.setItem('minutes', JSON.stringify(minutes))
      localStorage.setItem('hours', JSON.stringify(hours))
      localStorage.setItem('meridian', JSON.stringify(merid))
    }

    var ti = localStorage.exp
    var tim = parseInt(ti)

    localStorage.setItem('ti', JSON.stringify(ti))
    localStorage.setItem('tim', JSON.stringify(tim))

    minuteInt = minuteInt + parseInt(this.state.expTime);
    if (minuteInt > 59)
    {
      minuteInt = minuteInt - 60;
      hourInt = hourInt + 1;
      if (minuteInt < 10)
      {
          minuteInt = "0" + minuteInt;
      }
      if (hourInt == 12)
      {
        if (merid == "AM")
        {
          merid = "PM"
        }
        else if (merid == "PM")
        {
          merid = "AM"
        }
      }
      if (hourInt > 12)
      {
        hourInt = hourInt - 12;
      }
    }
    localStorage.setItem('Expiration Time', JSON.stringify(hourInt + ":" + minuteInt + merid))
  }

  handleChange = (e) => {
    this.setState({
      selected: e.value
    });
  }

  updateAvailability = () => {
    let items = [];
    if (!(localStorage.getItem('timeslots') === null)) {
      items = JSON.parse(localStorage.getItem('timeslots'))
      let a = items.indexOf(this.state.selected);

      let temp = JSON.parse(localStorage.getItem('availability'))
      temp[a] -= 1;
      localStorage.setItem('availability', JSON.stringify(temp))
    }

    this.myFunc();

  }

  render() {
    return (
      <div className="assignT">
        <h1>Assign Timeslot</h1>
        <div className="style-1">
          <h3>Time:&nbsp;</h3>
          <Dropdown 
            options={this.props.timeSlots.filter((item, index) => {
              return this.props.availability[index] > 0;
            })}
            onChange={this.handleChange}
            value={this.state.selected}
          />
        </div>
        <div className="style-1">
          {<Link to={{
            pathname: '/generateqr',
            state: {
              timSlot: this.state.selected,
              expTime: this.state.expTime,
              voterNum: this.state.voterNum
            }
          }}>
            <Button variant="success" onClick={this.updateAvailability}> Confirm </Button>
          </Link>}
        </div>
      </div>
    );
  }
}

export default AssignTimeslot;
