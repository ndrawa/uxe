import React, { Component } from "react";
import QrReader from "react-qr-reader";
import moment from "moment";
import { BsTruck } from "react-icons/bs";

class Tracking extends Component {
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
    // var moment = require('moment');
    const items = this.props.transaction
      .filter((data) => {
        if (this.state.result == null) return data;
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
              <h1 className="text-xl font-semibold">Tracking</h1>
            </div>
            <hr className="bg-gray-500" />
          </div>

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
                  <p>&nbsp;</p>
                  {/* <p>{this.state.result}</p> */}
                </div>
              );
            } else {
              return (
                <div className="bg-white">
                  <div className="px-4 pt-4 pb-10">
                    <div className="flex relative">
                      <BsTruck className="h-7 w-7 pr-2" />
                      <h1 className="text-lg font-semibold">
                        Status Pengiriman
                      </h1>
                    </div>
                    {items}
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </>
    );
  }
}

export default Tracking;
