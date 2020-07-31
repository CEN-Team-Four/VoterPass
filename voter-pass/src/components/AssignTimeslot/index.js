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
                  <Button variant="success"> Confirm </Button>
              </Link>}
          </div>
      </div>
    );
  }
}

export default AssignTimeslot;