import React from 'react';

import './index.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
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
    );
}

export default Navigation;