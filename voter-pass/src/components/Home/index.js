import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import TimeTable from '../TimeTable'
import AssignTimeslot from '../AssignTimeslot'

import './index.css';
 
class Home extends React.Component {
    state = {
        timeslots: this.initializeTimeslots(),
        availability: this.initializeAvailability(),
    };

    initializeAvailability(){
        if(!(localStorage.getItem('availability') === null)){
            let items = JSON.parse(localStorage.getItem('availability'))
            return items;
          }
          else{
            return [];
          }
    }

    initializeTimeslots(){
        if(!(localStorage.getItem('timeslots') === null)){
            let items = JSON.parse(localStorage.getItem('timeslots'))
            return items;
          }
          else{
            return [];
          }
    } 

render(){
    return (
       <div className = 'home-wrapper'>
            <div className = 'time-table-container'>
                <TimeTable timeslots = {this.state.timeslots} availability = {this.state.availability}></TimeTable>
            </div>
            <div className = 'buttons-container'>
                <Link to="/new-time-table">
                    <Button variant="dark"> New Table </Button>
                </Link>
                <Link to="/scan-code">
                    <Button variant="dark"> Scan QR Code </Button>
                </Link>               
            </div>
            <div className = 'assign-container'>
                <AssignTimeslot  timeSlots= {this.state.timeslots} availability= {this.state.availability} handler={this.handler}/>
            </div> 
       </div>
    );
}
}
 
export default Home;