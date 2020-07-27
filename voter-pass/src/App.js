import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation/';
import Home from './components/Home/';
import Timer from './components/Timer/';
import Help from './components/Help/';
import Error from './components/Error/';
import NewTable from './components/NewTable';
import ScanQR from './components/ScanQR';
import AssignTimeslot from './components/AssignTimeslot';
import NewQR from './components/NewQR';
import PrintPage from './components/PrintPage';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        

        <div className="page-display">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/timer" component={Timer}/>
            <Route exact path="/help" component={Help}/>
            <Route exact path="/new-time-table" component={NewTable}/>
            <Route exact path="/scan-code" component={ScanQR}/>
            <Route exact path="/assigntimeslot" component={AssignTimeslot}/>
            <Route exact path="/generateqr" component={NewQR}/>
            <Route exact path="/printpage" component={PrintPage}/>

            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>    

    );
  }
}

export default App;
