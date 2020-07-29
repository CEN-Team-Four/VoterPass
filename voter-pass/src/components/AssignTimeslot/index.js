import React, { Component } from "react";

import { Link } from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class AssignTimeslot extends Component {
  state ={
    options: ['9:30', '9:35', '9:40','9:45'],
    defaultOption: '9:30',
  }

  render() {
    return (
      <div className="assignT">
          <h1>Assign Timeslot</h1>
          <div className="style-1">
              <h3>Time:</h3>
              <Dropdown className="drpdwn" options={this.state.options} onChange={this._onSelect} value={this.state.defaultOption} placeholder="Select an option" />
          </div>
          <div className="style-1">
              {<Link to="/generateqr">
                  <Button variant="success"> Confirm </Button>
              </Link>}
              <Button variant="danger">Cancel</Button>
          </div>
      </div>
    );
  }
}

export default AssignTimeslot;