import './index.css';
import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
 
class ScanQR extends Component {
  state = {
    result: 'No result',
    voterNum: '',
    expTime: '',
    time: '',
    date: ''
  }
 
  handleScan = data => {
    if (data) {
    
    var str = data;
    var n = str.lastIndexOf(' ');
    var votNum = str.substring((n + 1),(n + 15));
    str = str.substring(0, n);
    n = str.lastIndexOf(' ');
    var ExpTime = str.substring((n + 1),(n + 15));
    ExpTime = ExpTime.replace('"', '');
    var n2 = ExpTime.lastIndexOf('"');
    ExpTime = ExpTime.substring(0,n2);
    str = str.substring(0, n);
    n = str.lastIndexOf(' ');
    var temp = str.substring((n + 1),(n + 15));
    ExpTime = temp + " " + ExpTime;
    str = str.substring(0, n);
    n = str.lastIndexOf(' ');
    var Time = str.substring((n + 1),(n + 15));
    str = str.substring(0, n);
    var Date = str;
    this.setState({
      result: data,
      voterNum: votNum,
      expTime: ExpTime,
      time: Time,
      date: Date
    })
    }

  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div className="cen">
            <h1>Scan QR Code</h1>
            <h5><i>Center the QR code in the window on the right</i></h5>
            <h2>{this.state.date}</h2>
            <h2>{this.state.time}</h2>
            <h2>{this.state.expTime}</h2>
            <h2>{this.state.voterNum}</h2>
            </div>
            <div class="row" className="cen">
        <Link to={{pathname: '/'}}>
            <Button variant="secondary" onClick={this.updateAvailability}>Return to Table</Button>
          </Link>
        </div>
          </div>
          <div class="col-lg-6">
          <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          
        />
          </div>
        </div>
        
      </div>
    )
  }
}

export default ScanQR;