import './index.css';
import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class ScanQR extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div className="scan-qr-code">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
          className="qrc"
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default ScanQR;