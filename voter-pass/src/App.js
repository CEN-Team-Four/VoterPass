import React from 'react';
import Voter from './components/Voter';
import './App.css';
import './components/Timer';
import Timer from './components/Timer';

class App extends React.Component {

  render() {
    const text = "https://dev.to";
    return (
      <div className="VoterPass">
        <header className="App-header">
          <h2>Voter Pass App </h2>     
        </header>
        <Timer/>
        <div className="bg">
        <body>
            <div className="row">
            <div className="column">
              <Voter/>
            </div>
          </div>
        </body>
        </div>
      </div>     

    );
  }
}

export default App;
