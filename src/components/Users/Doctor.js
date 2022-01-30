import React, { Component } from "react";
import QrReader from "react-qr-reader";

class Doctor extends Component {
  state = {
    result: "No result",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <>
        <div className="h-screen">
          <div className="px-4 pt-3 mb-2.5">
            <h1 className="text-xl font-semibold">Vaccinator</h1>
          </div>
          <hr className="bg-gray-500" />
          <form
            className="mt-4 flex flex-col px-12"
            onSubmit={(event) => {
              event.preventDefault();
              const _numberVaccine = this._numberVaccine.value;
              const _amountVaccine = this._amountVaccine.value;
              this.props.goTransfer(_numberVaccine, _amountVaccine);
            }}
          >
            <div className="mt-6 flex justify-center">
              <QrReader
                className="qr-image-wrapper"
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: "300px" }}
              />
            </div>

            <input
              className="p-2.5 mt-4 mb-2 border-1 border-gray-300 rounded-lg bg-gray-100"
              id="_numberVaccine"
              type="text"
              ref={(input) => {
                this._numberVaccine = input;
              }}
              value={this.state.result}
              disabled
              required
            />

            {(() => {
              if (this.state.result !== "No result") {
                return (
                  <input
                    className="p-2.5 mt-4 mb-4 border-1 border-gray-300 rounded-lg bg-gray-100"
                    id="_amountVaccine"
                    type="text"
                    ref={(input) => {
                      this._amountVaccine = input;
                    }}
                    placeholder="Amount Vaccine"
                    required
                  />
                );
              }
            })()}
            <button
              type="submit"
              className="bg-blue-500 p-2 mt-3 inline-flex rounded-lg transition duration-300 hover:bg-opacity-90 text-white font-sans justify-center"
            >
              Accept Vaccinator
            </button>
          </form>
          <p>&nbsp;</p>
        </div>
      </>
    );
  }
}

export default Doctor;
