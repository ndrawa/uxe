import React, { Component } from 'react';
import QRCode from 'qrcode';

class Producer extends Component {
  async generateQrCode (_numberVaccine, _amountVaccine) {
    try {
      const response = await QRCode.toDataURL(_numberVaccine);
      this.setState({ imageUlr: response.toString()});
    }catch (error) {
      console.log(error);
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      ImageUlr: '',
    }
  }
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
            ref={(input) => {this._numberVaccine = input}}
            className="form-control"
            placeholder="Batch Number"
            onChange={() => this.generateQrCode(this._numberVaccine.value, this._amountVaccine.value)}
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-4">
            <input
            id="_amountVaccine"
            type="text"
            ref={(input) => {this._amountVaccine = input}}
            className="form-control"
            placeholder="Total Vaccines"
            required/>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Start</button>
        </form>
        <p>&nbsp;</p>
        {this.state.imageUlr ? 
        ( 
        <a href={this.state.imageUlr} download>
          <img src={this.state.imageUlr} alt="img"/>
        </a>
        ) : null}
      </div>
    );
  }
}

export default Producer;
