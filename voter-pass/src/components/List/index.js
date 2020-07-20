import React from "react";

import './index.css';
import Table from 'react-bootstrap/Table';

function List(props) {
    const items = props.items;
    const listItems = items.map(item => {
        let seconds = ("0" + (Math.floor(item / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(item / 60000) % 60)).slice(-2);
        return <tr><td>{minutes} : {seconds}</td></tr>
    });

    return (
        <div className="list">
            <Table striped className="time-list">
                <thead>
                    <th className="time-list-heading">Measured Voting Durations</th>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </Table>
        </div>
    );
}

export default List;