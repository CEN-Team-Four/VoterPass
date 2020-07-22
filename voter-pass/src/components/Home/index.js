import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './index.css';
 
class Home extends React.Component {
    state = {
        table: this.initializeTable(),
    };

    initializeTable(){
        if(!(localStorage.getItem('timeTable') === null)){
            let items = JSON.parse(localStorage.getItem('listOfTimes'))
            return items;
          }
          else{
            return [];
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

       </div>
    );
}
}
 
export default Home;