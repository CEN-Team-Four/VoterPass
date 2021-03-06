import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

import './index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class NewTable extends Component{
  constructor(props) {
  super(props);
  this.state = {
    date: new Date().toLocaleString(),
    Location: '',
    startTime: '',
    endTime: '',
    expTime: '',
    numBooths:'',
    duration:'',
    times: [],
    available: [],
    average: this.initializeAve(),
    submitted: false,
    showSubmitModal: false,
    showValidateModal: false,
  };
}

  openSubmitModal = () => {
    this.setState({showSubmitModal: true})
  }
  closeSubmitModal = () => {
    this.setState({showSubmitModal: false})
  }

  openValidateModal = () => {
    this.setState({showValidateModal: true})
  }
  closeValidateModal = () => {
    this.setState({showValidateModal: false})
  }

  handleChange = event => {
    this.setState({
      Location: event.target.value
  });
};

  initializeAve = () =>{
    let test = 'test', myBool;
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        myBool = true;
    } catch(e) {
        myBool = false;
    }
    if(myBool === false){
        alert('Please enable cookies.')
        return 'N/A';
    }
    else{
        if(!(localStorage.getItem('average') === null)){
            let items = JSON.parse(localStorage.getItem('average'))
            let seconds = ("0" + (Math.floor(items / 1000) % 60)).slice(-2);
            let minutes = ("0" + (Math.floor(items / 60000) % 60)).slice(-2);
            let str = minutes + ':' + seconds
            return str;
        }
        else{
            return 'N/A';
        }
    }
  }

  validate = () => {
    if (!this.state.startTime || !this.state.endTime || !this.state.duration || !this.state.numBooths) {
      return false;
    }
    else {
      return true;
    }
    
  }

  handleChange2 = (event) => {
    this.setState({ expTime: event.target.value })
    localStorage.setItem('exp',JSON.stringify(event.target.value))
  }

  handleChange3 = (event) => {
    this.setState({ numBooths: event.target.value })
    localStorage.setItem('av',JSON.stringify(event.target.value))
  }

  handleSubmit = () => {

     this.setState({times:[]});
     this.setState({available:[]});
     localStorage.removeItem('timeslots');
     localStorage.removeItem('availability');
     let s = this.state.startTime.split(':',2);
     let ss = this.state.endTime.split(':',2);
     let startHour = parseInt(s[0]);
     let startMin = parseInt(s[1]);
     let endHour = parseInt(ss[0]);
     let endMin = parseInt(ss[1]);
     let cur = '';
     let hrs = endHour - startHour;
     if (hrs < 0) {
        hrs = hrs + 24;
    }
    let mins = endMin - startMin;
    if (mins < 0) {
       mins = mins + 60;
       hrs = hrs - 1;
   }
   let total = 60 * hrs + mins;
   let numSlots = total/this.state.duration + 1
   let curMin = startMin;
   let curHour = startHour;

   if (curHour >= 12) {
      cur = 'PM';
      if (curHour > 12)
        curHour -= 12;
    }
    else {
      cur = 'AM';
      if (curHour === 0)
        curHour += 12;
    }
    if (curMin < 10)
      this.state.times.push(curHour + ':0' + curMin + cur);
    else
      this.state.times.push(curHour + ':' + curMin + cur);

    this.state.available.push(this.state.numBooths);
    var prevHour = curHour;
    for (let i = 0; i < numSlots - 1; i++) {
      this.state.available.push(this.state.numBooths);
      curMin += parseInt(this.state.duration);
      if (curMin >= 60) {
        curMin -= 60;
        curHour++;
        if (curHour === 12 && prevHour !== 12) {
          if (cur === 'AM')
            cur = 'PM';
          else
            cur = 'AM';
        }
        if (curHour > 12)
          curHour -= 12;
        prevHour = curHour;
      }
      if (curMin < 10)
        this.state.times.push(curHour + ':0' + curMin + cur);
      else
        this.state.times.push(curHour + ':' + curMin + cur);
    }

    var avNum = this.state.available[0];

    var ticketArray = new Array(parseInt(this.state.times.length));

    for(let i = 0; i < ticketArray.length; i++)
    {
      ticketArray[i] = new Array(parseInt(avNum));
    }

    for (let i = 0; i < avNum; i++)
    {
      for (let j = 0; j < ticketArray.length; j++)
      {
        ticketArray[j][i] = null;
      }
    }

    localStorage.setItem('timeslots', JSON.stringify(this.state.times));
    localStorage.setItem('availability', JSON.stringify(this.state.available));
    localStorage.setItem('Tickets Scanned', JSON.stringify(ticketArray))

    console.log(this.state.times);
    console.log(this.state.available);

    this.setState({submitted: true});
 
 };

  render() {
    return(
      <div className="newtable">
        {this.state.showValidateModal &&
           <Modal show={this.state.showValidateModal} onHide={this.closeValidateModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please fill out the entire form.</Modal.Body>
            <Modal.Footer>
             
              <Button type="button" variant="primary" onClick={this.closeValidateModal}>
                OK
              </Button>
            </Modal.Footer>
           </Modal>
          }
          {this.state.showSubmitModal &&
           <Modal show={this.state.showSubmitModal} onHide={this.closeSubmitModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to create a new table? This will replace the existing table.</Modal.Body>
            <Modal.Footer>
             
              <Button type="button" variant="primary" onClick={this.closeSubmitModal}>
                Cancel 
              </Button>
              <Button type="button" variant="secondary" onClick={this.handleSubmit}>
                Create New Table 
              </Button>
              
            </Modal.Footer>
           </Modal>
          }
        <div className="form-wrapper">
          <h1>Create New Table</h1>
          <form onSubmit={(e) => {
            if(!this.validate()) {
              this.openValidateModal(); 
              e.preventDefault();
            }
            else{
              this.openSubmitModal();
              e.preventDefault();
            }
            }}>
          {}

          <br></br>
          <div className="textbox">
          <label htmlFor="start">Start Time: </label>
          <input
            type = 'time'
            value={this.state.startTime}
            onChange={event => this.setState({ startTime: event.target.value })}
          />

          <br></br>
          <label htmlFor="end">End Time: </label>
          <input
            type = 'time'
            value={this.state.endTime}
            onChange={event => this.setState({ endTime: event.target.value })}
          />


          <br></br>
          <label>Expiration Time: </label>
          <input
            placeholder= 'minutes'
            type = 'number'
            min = '1'
            value={this.state.expTime}
            onChange={this.handleChange2}
          />

          <br></br>
          <label>Duration per Timeslot: </label>
          <input
            placeholder= 'minutes'
            type = 'number'
            min = '1'
            value={this.state.duration}
            onChange={event => this.setState({ duration: event.target.value })}
          /> <p>average: {this.state.average}</p>

          <label>Availability per Timeslot: </label>
          <input
            placeholder= 'no. of voters'
            type = 'number'
            min = '1'
            value={this.state.numBooths}
            onChange={this.handleChange3}
          />

          <Button className="new-table-submit" variant="success" type="submit">Submit</Button>
          <Button variant="secondary" href="/">Return to Table</Button>
          {this.state.submitted === true &&  (
              <Redirect to="/" />
          )}

          </div>
          </form>
          </div>

      </div>
    );

  }
}

export default NewTable;
