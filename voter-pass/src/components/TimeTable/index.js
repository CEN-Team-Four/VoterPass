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
            <td>{item[0]}</td>
        );
    });
    let tableRows2 = listItems.map(item => {
        return (
            <td>{item[1]}</td>
        );
    });


    return (
        <div className='table-wrapper'>
        <Table striped responsive className="time-table table-striped table-bordered" style={{marginBottom: 0}}>
            <tbody className="table-body">
                <tr className="row-1">
                    <th className="Timeslots">Timeslots</th>
                    {tableRows}
                </tr>

                <tr className="row-2">
                    <th className="Availability">Availability</th>
                    {tableRows2}
                </tr>                
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