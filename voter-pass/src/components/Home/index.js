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
        if(!(localStorage.getItem('availablility') === null)){
            let items = JSON.parse(localStorage.getItem('availability'))
            return items;
          }
          else{
            return [5,5,5,5,5,5,5];
          }
    } 

    initializeTimeslots(){
        if(!(localStorage.getItem('timeslots') === null)){
            let items = JSON.parse(localStorage.getItem('timeslots'))
            return items;
          }
          else{
            return [3,3,3,3,3,3,3];
          }
    } 

render(){
    return (
       <div classname = 'home-wrapper'>
            <div className = 'buttons'>
                <Link to="/new-time-table">
                    <Button variant="dark"> New Table </Button>
                </Link>
                <Link to="/scan-code">
                    <Button variant="dark"> Scan QR Code </Button>
                </Link>               
            </div>
            <div className = 'time-table'>
                <TimeTable timeslots = {this.state.timeslots} availability = {this.state.availability}></TimeTable>
            </div>
            <div className = 'assign'>
                <AssignTimeslot></AssignTimeslot>
            </div> 
           
           
       </div>
        
       
       
    );
}
}
 
export default Home;