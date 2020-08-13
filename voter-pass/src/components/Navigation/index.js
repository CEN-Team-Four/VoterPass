import React from 'react';

import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">VoterPass</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link className="navigation-text" href="/">Timeslot Table</Nav.Link>
                    <Nav.Link className="navigation-text" href="/timer">Timer</Nav.Link>
                    <Nav.Link className="navigation-text" href="/help">Help and Instructions</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;