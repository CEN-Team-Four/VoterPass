import React from "react";

import './index.css';
import Table from 'react-bootstrap/Table';

function List(props) {
    let items = [], listItems = []
    if(!(localStorage.getItem('listOfTimes') === null)){
         items = JSON.parse(localStorage.getItem('listOfTimes'))
         listItems = items.map(item => {
            let seconds = ("0" + (Math.floor(item / 1000) % 60)).slice(-2);
            let minutes = ("0" + (Math.floor(item / 60000) % 60)).slice(-2);
            return <tr><td>{minutes} : {seconds}</td></tr>
        });
    }
    
    return (
        <div className="list">
            <Table striped className="time-list" style={{marginBottom: 0}}>
                <thead>
                    <th className="time-list-heading">Measured Times Between Voters</th>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </Table>
        </div>
    );
}

export default List;