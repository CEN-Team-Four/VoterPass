import React, { Component } from "react";

import './index.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  '9:30', '9:35', '9:40','9:45'
];

const defaultOption = options[0];

class AssignTimeslot extends Component {


  render() {
    return (
      <div className="assignT">
        <div>
          <h1>Assign Timeslot</h1>
          <div className="style-1">
              <h3>Time:</h3>
              <Dropdown className="drpdwn" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          </div>
          <div className="style-1">
              <Button variant="success">Confirm</Button>
              <Button variant="danger">Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignTimeslot;