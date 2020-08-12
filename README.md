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

## Usage
