import React, { Component } from "react";

import './index.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  '9:30', '9:35', '9:40','9:45'
];

const defaultOption = options[0];

var QRCode = require('qrcode.react');

class NewQR extends Component {
    state={
        curTime : new Date().toLocaleString(),
      }

  render() {
    return (
        <div>
            <div className='qrPos'>
                <h1>Your QR Ticket</h1>
                <QRCode value={this.state.curTime}/>
                <div>
                  <h3>Date: </h3>
                  <h3>Time: </h3>
                <Button className="btn" variant="dark" href="/printpage">Print</Button>
                <Button className="btn" variant="dark" href="/">Return to table</Button>
                </div>
            </div>
        </div>
    );
  }
}

export default NewQR;