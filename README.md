# VoterPass

## Introduction
VoterPass is a virtual queuing system for polling locations. Its purpose is to allow election officials to convert physical lines of voters into virtual lines, so as to encourage social distancing and other safety protocols that help prevent the spread of COVID-19.

### Features
VoterPass uses QR code tickets to assign voters to a timeslot for them to return to later in the day. It accomplishes this by providing a Timeslot Table to keep track of timeslots, a Timer to gather supplemental data, and a means to generate and scan QR codes.

The basic workflow of VoterPass is as follows:

1. Use the Timer feature to gather data on how long it takes for voters to vote.
2. Generate a Timeslot Table that partitions the polling location’s voting hours into timeslots that can be assigned to voters, using the data gathered from the previous step.
3. Assign timeslots from the Timeslot Table to voters in the order of the physical line at the polling location, using QR code tickets.
4. Process the QR code tickets of voters when they return for their timeslot.

## Installation
1. Verify that Node.js is installed or install Node.js at https://nodejs.org/en/.
2. Download the repository at https://github.com/CEN-Team-Four/VoterPass by cloning or forking. To clone:
```
git clone https://github.com/CEN-Team-Four/VoterPass.git
```
3. Change into the VoterPass directory.
```
cd VoterPass
```
4. Change into the voter-pass directory.
```
cd voter-pass
```
5. Install the application's dependencies using Node.js.
```
npm install
```
6. Run the application.
```
npm start
```

## Usage
This section will cover how to use and navigate the VoterPass application.

### Navigation
The VoterPass application consists of three main pages:

1. Timeslot Table (Home Page)
2. Timer
3. Help and Instructions

These three pages can be accessed from the navigation bar in the top-right corner.
![navbar](voter-pass\src\img\NavBar.PNG)

The Timeslot Table acts as the home page for the VoterPass application. From this page, you can access such features as:

1. Generating a new Timeslot Table
2. Assigning a timeslot
3. Scanning a QR code ticket

### Using the Timer
In order to gather data that will assist in determining the duration of timeslots for the Timeslot Table, we recommend using the built-in Timer. The Timer page consists of three features: the Timer, the Measured Time Between Voters list, and the Average Time Between Voters display.

The best protocol when using the Timer is to measure the duration of time that passes between voters exiting the voting booths. The procedure for using the Timer is as follows:

1. When the first voter leaves the voting booths, press Start on the Timer.
2. When the next voter leaves the voting booths, press Stop on the Timer.
3. Click on the Add to List button to add the recorded time to the Measured Time Between Voters list.
4. Press the Reset button on the Timer.
5. Press the Start button on the Timer and repeat steps 2-5 until enough data has been gathered to get a good Average Time Between Voters.
![timer](voter-pass\src\img\Timer2.PNG)


### Generating a Timeslot Table
The Timeslot Table displays the list of timeslots and their corresponding availabilities.

The procedure for generating a new Timeslot Table is as follows:

1. On the Timeslot Table page, click on the New Table button.
2. Enter the Start Time and End Time corresponding to your polling location’s hours. We recommend adding an extra hour to the End Time to account for voters arriving near your location’s closing time.
3. Enter the Duration, in minutes, for each timeslot. The Average Time Between Voters from the Timer page is displayed here for your convenience.
4. Enter the Availability per Timeslot. This is the number of voters that will be assigned to each timeslot.
5. Click on the Submit button to generate a new Timeslot Table with your given parameters.
![newtable](voter-pass\src\img\NewTable2.PNG)

### Assigning a Timeslot
Once a Timeslot Table is generated, you can assign timeslots from the table to voters.

The procedure for assigning a timeslot to a voter is as follows:

1. On the Timeslot Table page, select the time of the timeslot you wish to assign from the available options in the dropdown menu.
2. Click the Confirm button. This will redirect you to the inLine Ticket with the QR code that corresponds to the timeslot you just assigned.
![newtable](voter-pass\src\img\NewTable2.PNG)
1. On the inLine Ticket page, click on the Print button to print the ticket or to save it as a PDF. Alternatively, you can have the voter take a picture of their ticket.
2. Click on the Return to Table button to return to the Timeslot Table page.

### Scanning a QR Code
When a voter returns for their timeslot, you can scan the QR code on their inLine Ticket to verify the validity of the ticket.

The procedure for scanning a QR code is as follows:

1. On the Timeslot Table page, click on the Scan QR Code button.
2. Using your device’s camera, scan the QR code on the ticket.
3. If the ticket is valid, a confirmation message will appear. If the ticket is not valid, an error message will display.
4. Once a ticket has been verified, click on the Return to Table button to return to the Timeslot Table page.
![newtable](voter-pass\src\img\ScanQR.PNG)
