import React, { Component } from "react";
import QrReader from "react-qr-reader";
import moment from "moment";

class Patient extends Component {
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

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ result: keyword });
  };

  render() {
    const items = this.props.transaction
      .filter((data) => {
        if (this.state.result === null) return data;
        else if (data.numberVaccine.toString().includes(this.state.result)) {
          return data;
        } else {
          return null;
        }
      })
      .map((data, key) => {
        return (
          <div key={key}>
            <div className="mt-3 flex relative justify-between text-md">
              <p>{data.rolesender}</p>
              <p className="font-semibold">{data.sender}</p>
            </div>
            <p className="text-sm">
              {moment
                .unix(data.time)
                .locale("id")
                .format("LL, h:mm a")}
            </p>
          </div>
        );
      });

    return (
      <>
        <div className="h-screen bg-gray-200">
          <div className="pt-3 bg-white">
            <div className="px-4 mb-2.5">
              <h1 className="text-xl font-semibold">Healthy Vaccines</h1>
            </div>
            <hr className="bg-gray-500" />
          </div>

          <form
            className="mt-4 flex flex-col px-4"
            onSubmit={(event) => {
              event.preventDefault();
              const _numberVaccine = this._numberVaccine.value;
              const _amountVaccine = this._amountVaccine.value;
              this.props.finishTransaction(_numberVaccine, _amountVaccine);
            }}
          >
            <input
              id="_numberVaccine"
              type="text"
              ref={(input) => {
                this._numberVaccine = input;
              }}
              value={this.state.result}
              className="bg-white"
              disabled
              hidden
              required
            />
            <input
              id="_amountVaccine"
              type="text"
              ref={(input) => {
                this._amountVaccine = input;
              }}
              value={1}
              disabled
              required
              hidden
            />

            {(() => {
              if (this.state.result === "No result") {
                return (
                  <div className="mt-6 flex justify-center">
                    <QrReader
                      className="qr-image-wrapper"
                      delay={300}
                      onError={this.handleError}
                      onScan={this.handleScan}
                      style={{ width: "300px" }}
                    />
                    {/* <p>{this.state.result}</p> */}
                  </div>
                );
              }
            })()}

            {(() => {
              if (this.state.result !== "No result") {
                return (
                  <>
                    <div className="p-2.5 mt-4 mb-4 border-1 rounded-lg bg-white">
                      <h1 className="text-lg">Vaccine:</h1>
                      <div className=" text-center justify-center items-center ">
                        <h2 className="text-lg font-semibold">
                          {" "}
                          Batch Number{" "}
                        </h2>
                        <p>{this.state.result}</p>
                      </div>
                    </div>

                    <div className="bg-white px-4 pt-4 pb-10 rounded-lg">
                      <div className="flex relative">
                        <h1 className="text-lg font-semibold">
                          Status Pengiriman
                        </h1>
                      </div>
                      {items}
                    </div>

                    <button
                      type="submit"
                      className="bg-green-400 p-2 py-2.5 mt-6 inline-flex rounded-lg transition duration-300 hover:bg-opacity-90 text-white font-sans justify-center"
                    >
                      Accept Vaccine
                    </button>
                  </>

                  // <div>
                  //   <p>&nbsp;</p>
                  //   <div>
                  //     <h1>Tracking</h1>
                  //     <table className="table">
                  //       <thead>
                  //         <tr>
                  //           {/* <th scope="col">#</th> */}
                  //           <th scope="col">Time</th>
                  //           {/* <th scope="col">No. Transaction</th> */}
                  //           {/* <th scope="col">No. Batch</th> */}
                  //           {/* <th scope="col">Total</th> */}
                  //           <th scope="col">Receiver</th>
                  //           {/* <th scope="col">Sender</th> */}
                  //         </tr>
                  //       </thead>
                  //       <tbody id="trackingList">{items}</tbody>
                  //     </table>
                  //   </div>
                  //   <button type="submit" className="btn btn-primary mt-4">
                  //     Accept Vaccine
                  //   </button>
                  // </div>
                );
              }
            })()}
          </form>
        </div>
      </>
    );
  }
}

export default Patient;
