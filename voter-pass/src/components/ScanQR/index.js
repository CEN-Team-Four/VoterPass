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
    date: '',
    valid: '',
    timeSlots: this.props.location.state.timeSlots,
    availability: this.props.location.state.availability
  }
 
  handleScan = data => {
    if (data) {

      if (localStorage.getItem('Last Ticket') === null)
      {
        localStorage.setItem('Last Ticket',JSON.stringify(data));
        localStorage.setItem('temp_1',JSON.stringify('0'));
        localStorage.setItem('update',JSON.stringify('true'));
      }
      else
      {
        if (data === JSON.parse(localStorage.getItem('Last Ticket')))
        {
          localStorage.setItem('status',JSON.stringify('same'));
          localStorage.setItem('update',JSON.stringify('false'));
        }
        else
        {
          localStorage.setItem('status',JSON.stringify('different'));
          localStorage.setItem('Last Ticket',JSON.stringify(data));
          localStorage.setItem('update',JSON.stringify('true'));
        }
      }


      if (JSON.parse(localStorage.getItem('temp_1')) === '0')
      {
        localStorage.setItem('temp_1',JSON.stringify('1'));
      }
      else if (JSON.parse(localStorage.getItem('temp_1')) === '1')
      {
        localStorage.setItem('temp_1',JSON.stringify('0'));
      }
    
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
      Time = Time.substring(0,(Time.length - 1))
      var Time2 = Time.substring(5);
      str = str.substring(0, n);
      var Date = str;
      this.setState({
        result: data,
        voterNum: votNum,
        expTime: ExpTime,
        time: Time,
        date: Date
      })

      var myTimeslots = this.state.timeSlots;
      var myAv = this.state.availability;

      let tempAvailable = JSON.parse(localStorage.getItem('available'))



      if (JSON.parse(localStorage.getItem('update')) === 'true')
      {
      for (let i = 0; i < myTimeslots.length; i++) 
      {
        if (myTimeslots[i] === Time2)
        {
          let arr = JSON.parse(localStorage.getItem('tickets'));
          
          if (arr[i] > 0)
          {
            arr[i] = arr[i] - 1;
          }
          else if (arr[i] === 0)
          {
            tempAvailable[i] = false;
            localStorage.setItem('available', JSON.stringify(tempAvailable));
          }

          if (tempAvailable[i] === true)
          {
            this.setState({
              valid: 'Confirmed!'
            })
          }
          else
          {
            this.setState({
              valid: 'This ticket is invalid!'
            })
          }
          
          localStorage.setItem('tickets', JSON.stringify(arr));
        }
      }
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
            </div>
            <div class="row" className="cen">
        <Link to={{pathname: '/'}}>
            <Button variant="success" onClick={this.updateAvailability}>Return to table</Button>
          </Link>
        </div>
          </div>
          <div class="col-lg-6">
          <QrReader
          delay={500}
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