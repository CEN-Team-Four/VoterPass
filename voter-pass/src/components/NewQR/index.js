import React, { Component } from "react";

import './index.css';
import Button from 'react-bootstrap/Button';
import 'react-dropdown/style.css';

var QRCode = require('qrcode.react');

class NewQR extends Component {
    state={
        curTime : new Date(),
        meridiem: this.intitializeMerideiem(),
    }

    intitializeMerideiem(){
      let time = new Date()
      if(time.getHours() >= 12){
        return ' P.M.'
      }
      else
        return ' A.M.'
    }

  render() {
    return (
        <div>
            <div className='qrPos'>
                <h1>Your QR Ticket</h1>
                <QRCode value={this.state.curTime.toLocaleString()}/>
                <div>
                  <h3>Date: {this.state.curTime.getMonth()}/
                   {this.state.curTime.getDate()}/
                   {this.state.curTime.getFullYear()} </h3>
                  <h3>Time: {this.state.curTime.getHours()}:
                  {this.state.curTime.getMinutes()} 
                  {this.state.meridiem}
                  </h3>

                <Button className="btn" variant="dark" href="/printpage">Print</Button>
                <Button className="btn" variant="dark" href="/">Return to table</Button>
                </div>
            </div>
        </div>
    );
  }
}

export default NewQR;