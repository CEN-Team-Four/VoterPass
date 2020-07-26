import React from 'react';
import Table from 'react-bootstrap/Table';

import './index.css';

function TimeTable(props){   
    let timeslots = props.timeslots;
    let availability = props.availability;
    let listItems1 = timeslots.map(item => {
        return <tr><td>{item}</td></tr>
    });
    let listItems2 = availability.map(item => {        
        return <tr><td>{item}</td></tr>;
    });

    return(

    
        <Table striped className="time-table table-striped table-bordered ">
            <thead>
                <th className="Timeslots">Timeslots</th>
                <th className="Availability">Availability</th>
            </thead>
            <tbody>
                              
                <td>{listItems1}</td>
                <td>{listItems2}</td>
               
            </tbody>
        </Table>
    );
}

export default TimeTable;