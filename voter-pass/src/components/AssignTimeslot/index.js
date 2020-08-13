import React, { Component } from "react";

import { Link } from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class AssignTimeslot extends Component {
  state = {
    selected: this.initializeSelected(),
    expTime: this.initializeExpiration(),
    voterNum: ''
  };

  initializeSelected() {
    for (let i = 0; i < this.props.timeSlots.length; i++) {
      if (this.props.availability[i] > 0)
        return this.props.timeSlots[i];
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

    if (myVar.charAt(1) === ":")
    {
      hours = myVar.substring(0,1)
      minutes = myVar.substring(2,4)
      merid = myVar.substring(4,6)
      hourInt = parseInt(hours)
      minuteInt = parseInt(minutes)
    }
    else
    {
      hours = myVar.substring(0,2)
      minutes = myVar.substring(3,5)
      merid = myVar.substring(5,7)
      hourInt = parseInt(hours)
      minuteInt = parseInt(minutes)
    }

    minuteInt = minuteInt + parseInt(this.state.expTime);
    if (minuteInt > 59)
    {
      minuteInt = minuteInt - 60;
      hourInt = hourInt + 1;
      if (hourInt === 12)
      {
        if (merid === "AM")
        {
          merid = "PM"
        }
        else if (merid === "PM")
        {
          merid = "AM"
        }
      }
      if (hourInt > 12)
      {
        hourInt = hourInt - 12;
      }
    }

    if (minuteInt < 10)
    {
        minuteInt = "0" + minuteInt;
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

      var temp2 = parseInt(JSON.parse(localStorage.getItem('av'))) - temp[a];

      localStorage.setItem('voterNum', JSON.stringify(temp2));
      localStorage.setItem('availability', JSON.stringify(temp));
    }

    this.myFunc();

  }

  verify = () =>{
    for (let i = 0; i < this.props.availability.length; i++) {
      if (this.props.availability[i] > 0)
        return true;
    }
    return false;
  }

  render() {
    return (
      <div >
        <h1>Assign Timeslot</h1>
        <div className = 'row'>
          <Col className="style-1">
            <h3 className="time">Time:&nbsp; &nbsp; &nbsp;</h3>
            <Dropdown 
              className="dropdown"
              options={this.props.timeSlots.filter((item, index) => {
                return this.props.availability[index] > 0;
              })}
              onChange={this.handleChange}
              value={this.state.selected}
            />
          </Col>
          <Col className="style-2" >
            {<Link to={{
              pathname: '/generateqr',
              state: {
                timSlot: this.state.selected,
                expTime: this.state.expTime,
                voterNum: this.state.voterNum
              }
            }}>{this.state.expTime > 0 &&
              <Button size="lg" variant="success" onClick={this.updateAvailability}> Confirm </Button>}
            </Link>}
          </Col>
        </div>
      </div>
    );
  }
}

export default AssignTimeslot;
