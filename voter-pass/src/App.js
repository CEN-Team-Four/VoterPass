import React from 'react';
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
        
        <div className="Timers">
          <Timer/>
        </div>
      </div>     

    );
  }
}

export default App;
