import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class Doctor extends Component {
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
      <div id="content">
        <h1>&ensp;&ensp;Scan Qr Code Doctor&ensp;&ensp;</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const _numberVaccine = this._numberVaccine.value
          const _amountVaccine = this._amountVaccine.value
          this.props.goTransfer(_numberVaccine,_amountVaccine)
        }}>
          <div>
            <QrReader className="qr-image-wrapper"
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
            {/* <p>{this.state.result}</p> */}
          </div>

          <div className="form-group mr-sm-2 mt-4">
            <input
            id="_numberVaccine"
            type="text"
            ref={(input) => {this._numberVaccine = input}}
            className="form-control"
            value={this.state.result}
            disabled
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-3">
            <input
            id="_amountVaccine"
            type="text"
            ref={(input) => {this._amountVaccine = input}}
            className="form-control"
            value={this.state.result}
            disabled
            required
            hidden/>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Accept Doctor</button>
          
        </form>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export default Doctor;
