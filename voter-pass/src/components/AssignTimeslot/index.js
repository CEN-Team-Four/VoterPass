import React, { Component } from "react";

import { Link } from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';
import 'react-dropdown/style.css';

class AssignTimeslot extends Component {
  state = {
      selected: this.props.timeSlots[0]
    };
   

  handleChange = (e) => {
    this.setState({
        selected: e.target.value
    });
  }

  updateAvailability = () =>{
    let items = [];
    if(!(localStorage.getItem('timeslots') === null)){
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
              <select onChange={this.handleChange}>
                {this.props.timeSlots.map(item => {
                  return(
                    <option>{item}</option>
                  );
                })}
              </select>
          </div>
          <div className="style-1">
              {<Link to={{pathname: '/generateqr',
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