import React from 'react';

import './index.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Help = () => {
   return (
      <div className="help-container">
         <ListGroup className="help-navigation-links">
            <ListGroup.Item className="light-link" action variant="light" href="#help-and-instructions" active>Help and Instructions</ListGroup.Item>
            <ListGroup.Item className="dark-link" action variant="dark" href="#introduction" active>Introduction</ListGroup.Item>
            <ListGroup.Item className="light-link" action variant="light" href="#generating-a-new-table" active>Generating a Timeslot Table</ListGroup.Item>
            <ListGroup.Item className="dark-link" action variant="light" href="#assigning-a-timeslot" active>Assigning a Timeslot</ListGroup.Item>
            <ListGroup.Item className="light-link" action variant="dark" href="#scanning-a-qr-code" active>Scanning a QR Code</ListGroup.Item>

         </ListGroup>

         <div className="help-feed">
            <h1 id="help-and-instructions">Help and Instructions</h1>
            <p>These are the instructions for this application.</p>

            <h3 id="introduction">How to Use The Timer</h3>
            <p>
               VoterPass is a virtual queuing system for polling locations. Its purpose is to allow election officials to convert physical lines of voters into virtual lines, so as to encourage social distancing and other safety protocols that help prevent the spread of COVID-19.
            </p>

            <p>
               The basic workflow of VoterPass is as follows:
            </p>

            <ol>
               <li>Use the Timer feature to gather data on how long it takes for voters to vote, to assist in executing the next step.</li>
               <li>Generate a Timeslot Table that partitions the polling location’s voting hours into timeslots that can be assigned to voters.</li>
               <li>Assign timeslots from the Timeslot Table to voters in the order of the physical line at the polling location, using QR code tickets.</li>
               <li>Process the QR code tickets of voters when they return for their timeslot.</li>
            </ol>

            <h3 id="generating-a-new-table">Generating a New Timeslot Table</h3>
            <p>
            The Timeslot Table displays the list of timeslots and their corresponding availabilities.
            </p>

            <p>
            The procedure for generating a new Timeslot Table is as follows:
            </p>

            <ol>
               <li>On the Timeslot Table page, click on the New Table button.</li>
               <li>Enter the Start Time and End Time corresponding to your polling location’s hours. We recommend adding an extra hour to the End Time to account for voters arriving near your location’s closing time.</li>
               <li>Enter the Duration, in minutes, for each timeslot. The Average Time Between Voters from the Timer page is displayed here for your convenience.</li>
               <li>Enter the Availability per Timeslot. This is the number of voters that will be assigned to each timeslot.</li>
               <li>Click on the Submit button to generate a new Timeslot Table with your given parameters.</li>
            </ol>

            <h3 id="assigning-a-timeslot">Assigning a Timeslot</h3>
            <p>
            Once a Timeslot Table is generated, you can assign timeslots from the table to voters.
            </p>

            <p>
            The procedure for assigning a timeslot to a voter is as follows:
            </p>

            <ol>
               <li>On the Timeslot Table page, select the time of the timeslot you wish to assign from the available options in the dropdown menu.</li>
               <li>Click the Confirm button. This will redirect you to the inLine Ticket with the QR code that corresponds to the timeslot you just assigned.</li>
               <li>On the inLine Ticket page, click on the Print button to print the ticket or to save it as a PDF. Alternatively, you can have the voter take a picture of their ticket.</li>
               <li>Click on the Return to Table button to return to the Timeslot Table page.</li>
            </ol>

            <h3 id="scanning-a-qr-code">Scanning a QR Code</h3>
            <p>
            When a voter returns for their timeslot, you can scan the QR code on their inLine Ticket to verify the validity of the ticket.
            </p>

            <p>
            The procedure for scanning a QR code is as follows:
            </p>

            <ol>
               <li>On the Timeslot Table page, click on the Scan QR Code button.</li>
               <li>Using your device’s camera, scan the QR code on the ticket.</li>
               <li>If the ticket is valid, a confirmation message will appear. If the ticket is not valid, an error message will display.</li>
               <li>Once a ticket has been verified, click on the Return to Table button to return to the Timeslot Table page.</li>
            </ol>

         </div>
      </div>
   );
}

export default Help;