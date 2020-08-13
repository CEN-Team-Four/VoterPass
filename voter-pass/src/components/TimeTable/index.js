import React from 'react';
import Table from 'react-bootstrap/Table';

import './index.css';

function TimeTable(props) {
    let timeslots = props.timeslots;
    let availability = props.availability;
    let listItems = [];
    for(let i = 0; i < timeslots.length; i++) {
        listItems.push([timeslots[i], availability[i]]);
    }
    let tableRows = listItems.map(item => {
        return (
            <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
            </tr>
        );
    });

    return (
        <div className='table-wrapper'>
        <Table striped className="time-table table-striped table-bordered" style={{marginBottom: 0}}>
            <thead className="table-head">
                <tr>
                    <th className="Timeslots">Timeslots</th>
                    <th className="Availability">Availability</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {tableRows}
            </tbody>           
        </Table> 
        <div className = 'empty-msg'>
            {tableRows.length === 0 && <p>Click on the New Table button to generate a table here.
                <br></br>Or, click on the Help and Instructions link above to learn more about this application.</p>}
        </div>
        </div>
    );
}

export default TimeTable;