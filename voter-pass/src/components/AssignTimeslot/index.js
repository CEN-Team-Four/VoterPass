import React, { Component } from "react";

import { Link } from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class AssignTimeslot extends Component {
  state = {
    selected: this.initializeSelected()
  };

  initializeSelected() {
    for (let i = 0; i < this.props.timeSlots.length; i++) {
      if (this.props.availability[i] > 0)
        return this.props.timeSlots[i];
    }
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
              timSlot: this.state.selected
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

{/* <select onChange={this.handleChange}>
  {this.props.timeSlots.map((item, index) => {
    if (this.props.availability[index] > 0) {
      return (
        <option>{item}</option>
      );
    }
  })}
</select> */}