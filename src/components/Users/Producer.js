import React, { Component } from "react";
import QRCode from "qrcode";

class Producer extends Component {
  async generateQrCode(_numberVaccine, _amountVaccine) {
    try {
      const response = await QRCode.toDataURL(_numberVaccine);
      this.setState({ imageUrl: response.toString() });
    } catch (error) {
      console.log(error);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      ImageUrl: "",
    };
  }
  render() {
    return (
      <>
        <div className="h-screen">
          <div className="px-4 pt-3 pb-2">
            <h1 className="text-xl font-semibold">Transaction</h1>
          </div>
          <hr className="bg-gray-500" />

          <form
            className="mt-4 flex flex-col px-12"
            onSubmit={(event) => {
              event.preventDefault();
              const _numberVaccine = this._numberVaccine.value;
              const _amountVaccine = this._amountVaccine.value;
              this.props.startTransaction(_numberVaccine, _amountVaccine);
            }}
          >
            <h1 className="text-sm mb-1">ID Vaccines*</h1>
            <input
              className="p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
              id="_numberVaccine"
              type="number"
              ref={(input) => {
                this._numberVaccine = input;
              }}
              placeholder="Batch Number"
              onChange={() =>
                this.generateQrCode(
                  this._numberVaccine.value,
                  this._amountVaccine.value
                )
              }
              required
            />
            <h1 className="text-sm mb-1">Amount Vaccines*</h1>
            <input
              className="p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
              id="_amountVaccine"
              type="number"
              ref={(input) => {
                this._amountVaccine = input;
              }}
              placeholder="Total Vaccines"
              required
            />
            <h1 className="text-sm mb-1">QR Code</h1>
            <div className="flex px-6 py-6 justify-center border-2 bg-gray-200 border-gray-300 rounded-lg">
              {this.state.imageUrl ? (
                <div className="border-3 border-gray-300 rounded-lg">
                  <a href={this.state.imageUrl} download>
                    <img
                      src={this.state.imageUrl}
                      alt="img"
                      className="h-56 w-56"
                    />
                  </a>
                </div>
              ) : (
                <div className="h-56 w-56"></div>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 p-2 mt-3 inline-flex rounded-lg transition duration-300 hover:bg-opacity-90 text-white font-sans justify-center"
            >
              Start
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Producer;
