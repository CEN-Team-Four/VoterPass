import React, { Component } from "react";

import './index.css';
import Button from 'react-bootstrap/Button';
import 'react-dropdown/style.css';

var QRCode = require('qrcode.react');

class NewQR extends Component {
    state={
        curTime : new Date(),
        timSlot: this.props.location.state.timSlot
    }

  render() {
    return (
        <div>
            <div className='qrPos'>
                <h1>Your QR Ticket</h1>
                <QRCode value={"Date: " + 
                      (this.state.curTime.getMonth() + 1) + "/" + 
                      this.state.curTime.getDate() + "/" +
                      this.state.curTime.getFullYear() + '\n' +
                      "Time: " + 
                  this.state.timSlot}/>
                <div>
                  <h3>Date: {this.state.curTime.getMonth() + 1}/
                   {this.state.curTime.getDate()}/
                   {this.state.curTime.getFullYear()} </h3>
                  <h3>Assigned Time: {this.state.timSlot}</h3>
                <Button className="btn" variant="dark" href="/printpage">Print</Button>
                <Button className="btn" variant="dark" href="/">Return to table</Button>
                </div>
            </div>
        </div>
    );
  }
}

export default NewQR;