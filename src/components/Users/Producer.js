import React, { Component } from 'react';

class Producer extends Component {

  render() {
    return (
      <div id="content">
        <h1>Start Transaction</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const _numberVaccine = this._numberVaccine.value
          const _amountVaccine = this._amountVaccine.value
          this.props.startTransaction(_numberVaccine,_amountVaccine)
        }}>
          <div className="form-group mr-sm-2 mt-4">
            <input
            id="_numberVaccine"
            type="text"
            ref={(input) => {this._user = input}}
            className="form-control"
            placeholder="Batch Number"
            required/>
          </div>

          <div className="form-group mr-sm-2">
            <input
            id="_amountVaccine"
            type="text"
            ref={(input) => {this._userName = input}}
            className="form-control"
            placeholder="Total Vaccines"
            required/>
          </div>

          <button type="submit" className="btn btn-primary mt-4">Start</button>
        </form>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export default Producer;
