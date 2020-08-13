import React from 'react';

import './index.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

import navBar from './images/NavBar.PNG';
import timer from './images/Timer2.PNG';
import scanQR from './images/ScanQR.PNG';
import newQR from './images/NewQR.PNG';
import newTable from './images/NewTable2.PNG';
import assignT from './images/AssignT.png';
//import assignQR from './images/AssignQR.PNG';

const Help = () => {
   return (
      <div className="help-container">
         <ListGroup className="help-navigation-links">
            <ListGroup.Item className="light-link" action variant="light" href="#help-and-instructions" active>Help and Instructions</ListGroup.Item>
            <ListGroup.Item className="dark-link" action variant="dark" href="#introduction" active>Introduction</ListGroup.Item>
            <ListGroup.Item className="light-link" action variant="dark" href="#navigation" active>Navigation</ListGroup.Item>
            <ListGroup.Item className="dark-link" action variant="dark" href="#using-the-timer" active>Using the Timer</ListGroup.Item>
            <ListGroup.Item className="light-link" action variant="light" href="#generating-a-new-table" active>Generating a Timeslot Table</ListGroup.Item>
            <ListGroup.Item className="dark-link" action variant="light" href="#assigning-a-timeslot" active>Assigning a Timeslot</ListGroup.Item>
            <ListGroup.Item className="light-link" action variant="dark" href="#scanning-a-qr-code" active>Scanning a QR Code</ListGroup.Item>

         </ListGroup>

         <div className="help-feed">
            <h1 id="help-and-instructions">Help and Instructions</h1>
            <p>These are the instructions for the VoterPass application.</p>

            <h3 id="introduction">Introduction</h3>
            <p>
               VoterPass is a virtual queuing system for polling locations. Its purpose is to allow election officials to convert physical lines of voters into virtual lines, so as to encourage social distancing and other safety protocols that help prevent the spread of COVID-19.
            </p>

            <p>
            VoterPass uses QR code tickets to assign voters to a timeslot for them to return to later in the day. It accomplishes this by providing a Timeslot Table to keep track of timeslots, a Timer to gather supplemental data, and a means to generate and scan QR codes.
            </p>

            <p>
               The basic workflow of VoterPass is as follows:
            </p>

            <ol>
               <li>Use the Timer feature to gather data on how long it takes for voters to vote.</li>
               <li>Generate a Timeslot Table that partitions the polling location’s voting hours into timeslots that can be assigned to voters, using the data gathered from the previous step.</li>
               <li>Assign timeslots from the Timeslot Table to voters in the order of the physical line at the polling location, using QR code tickets.</li>
               <li>Process the QR code tickets of voters when they return for their timeslot.</li>
            </ol>

            <h3 id="navigation">Navigation</h3>
            <p>
               The VoterPass application consists of three main pages:
            </p>

            <ol>
               <li>Timeslot Table (Home Page)</li>
               <li>Timer</li>
               <li>Help and Instructions</li>
            </ol>

            <p>
               These three pages can be accessed from the navigation bar in the top-right corner.
            </p>

            <Image src={navBar} fluid />

            <p>
               The Timeslot Table acts as the home page for the VoterPass application. From this page, you can access such features as:
            </p>

            <ol>
               <li>Generating a new Timeslot Table</li>
               <li>Assigning a timeslot</li>
               <li>Scanning a QR code ticket</li>
            </ol>

            <h3 id="using-the-timer">Using the Timer</h3>
            <p>
               In order to gather data that will assist in determining the duration of timeslots for the Timeslot Table, we recommend using the built-in Timer. The Timer page consists of three features: the Timer, the Measured Time Between Voters list, and the Average Time Between Voters display.
            </p>

            <p>
               The best protocol when using the Timer is to measure the duration of time that passes between voters exiting the voting booths. The procedure for using the Timer is as follows:
            </p>

            <ol>
               <li>When the first voter leaves the voting booths, press Start on the Timer.</li>
               <li>When the next voter leaves the voting booths, press Stop on the Timer.</li>
               <li>Click on the Add to List button to add the recorded time to the Measured Time Between Voters list.</li>
               <li>Press the Reset button on the Timer.</li>
               <li>Press the Start button on the Timer and repeat steps 2-5 until enough data has been gathered to get a good Average Time Between Voters.</li>
            </ol>

            <Image src={timer} fluid />
            <br></br>
            <br></br>
            <h3 id="generating-a-new-table">Generating a Timeslot Table</h3>
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

            <Image src={newTable} fluid />
            <br></br>
            <br></br>
            <h3 id="assigning-a-timeslot">Assigning a Timeslot</h3>
            <p>
               Once a Timeslot Table is generated, you can assign timeslots from the table to voters.
            </p>

            <p>
               The procedure for assigning a timeslot to a voter is as follows:
            </p>

            <ol>
               <li>On the Timeslot Table page, select the time of the timeslot you wish to assign from the available options in the dropdown menu.</li>
               <Image src={assignT} fluid />
               <li>Click the Confirm button. This will redirect you to the inLine Ticket with the QR code that corresponds to the timeslot you just assigned.</li>
               <Image src={newQR} fluid />
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

            <Image src={scanQR} fluid />

         </div>
      </div>
   );
}

export default Help;