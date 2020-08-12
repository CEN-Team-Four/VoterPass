import './index.css';
import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
 
class ScanQR extends Component {
  state = {
    voterNum: '',
    expTime: '',
    time: '',
    date: '',
    valid: '',
    valid2: '',
    timeSlots: this.props.location.state.timeSlots,
    availability: this.props.location.state.availability,
  }
 
  handleScan = data => {
    if (data) {

      if (localStorage.getItem('Last Ticket') === null)
      {
        localStorage.setItem('Last Ticket',JSON.stringify(data));
        localStorage.setItem('update',JSON.stringify('true'));
      }
      else
      {
        if (data === JSON.parse(localStorage.getItem('Last Ticket')))
        {
          localStorage.setItem('update',JSON.stringify('false'));
        }
        else
        {
          localStorage.setItem('Last Ticket',JSON.stringify(data));
          localStorage.setItem('update',JSON.stringify('true'));
        }
      }
    
      var str = data;
      var n = str.lastIndexOf(' ');
      var votNum = str.substring((n + 1),(n + 15));
      var votNum2 = votNum.substring(6);
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
      Time = Time.substring(0,(Time.length - 1))
      var Time2 = Time.substring(5);
      str = str.substring(0, n);
      var Date = str;

      Date = Date.replace('Date:','Date: ');
      Time = Time.replace('Time:','Time: ')
      ExpTime = ExpTime.replace('Expiration Time:','Expiration Time: ');
      votNum = votNum.replace('Voter:','Voter: ');

      this.setState({
        voterNum: votNum,
        expTime: ExpTime,
        time: Time,
        date: Date
      })

      votNum2 = parseInt(votNum2);

      var myTimeslots = this.state.timeSlots;

      var upd = 0;

      for (let i = 0; i < myTimeslots.length; i++) 
      {
        if (myTimeslots[i] === Time2)
        {
          upd = 1;
          let ticketsScanned = JSON.parse(localStorage.getItem('Tickets Scanned'));

          if (ticketsScanned[i][votNum2 - 1] === null)
          {
            this.setState({
              valid: 'Confirmed!'
            })
            ticketsScanned[i][votNum2 - 1] = true
          }
          else
          {
            this.setState({
              valid: 'Ticket Already Scanned!'
            })
          }
          
          localStorage.setItem('Tickets Scanned', JSON.stringify(ticketsScanned));
        }
      }

      if (upd === 0)
      {
        this.setState({
          valid: 'This ticket is invalid!'
        })
      }
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
            <h2>{this.state.valid}</h2>
            <h2>{this.state.date}</h2>
            <h2>{this.state.time}</h2>
            <h2>{this.state.expTime}</h2>
            <h2>{this.state.voterNum}</h2>
            <h2>{this.state.temp}</h2>
            <h2>{this.state.valid2}</h2>
            </div>
            <div class="row" className="cen">
        <Link to={{pathname: '/'}}>
            <Button variant="secondary" onClick={this.updateAvailability}>Return to Table</Button>
          </Link>
        </div>
          </div>
          <div class="col-lg-6">
          <QrReader
          delay={2500}
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