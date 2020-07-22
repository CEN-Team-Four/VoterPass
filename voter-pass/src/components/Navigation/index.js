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
                    <Nav.Link href="/">Timeslot Table</Nav.Link>
                    <Nav.Link href="/timer">Timer</Nav.Link>
                    <Nav.Link href="/help">Help and Instructions</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

/*
            <div className="VoterPass">
                <header className="navigation-bar">
                    <h2>Voter Pass App </h2>

                    <div className="navigation-links">
                        <NavLink to="/">Timeslot Table </NavLink>
                        <NavLink to="/timer">Timer</NavLink>
                        <NavLink to="/help">Help and Instructions</NavLink>
                    </div>
                </header>
            </div>
*/