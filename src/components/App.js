import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Tracking from "../abis/Tracking.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./Admin/User";
import Vaccine from "./Admin/Vaccine";
import Producer from "./Users/Producer";
import Distributor from "./Users/Distributor";
import Doctor from "./Users/Doctor";
import Patient from "./Users/Patient";
import Alur from "./Users/Tracking";
import Navbar from "./Navbar";
import moment from "moment";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.componentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Tracking.networks[networkId];

    if (networkData) {
      const tracking = web3.eth.Contract(Tracking.abi, networkData.address);
      this.setState({ tracking: tracking });

      const user = await tracking.methods.users(accounts[0]).call();

      this.setState({ role: user.role });
      this.setState({ username: user.name });

      const _Vaccine = await tracking.methods._Vaccine().call();
      this.setState({ _Vaccine });
      for (var index = 0; index < _Vaccine; index++) {
        const vaccine = await tracking.methods.vaccines(index).call();
        this.setState({
          vaccines: [...this.state.vaccines, vaccine],
        });
      }
      this.setState({ loading: false });

      const _Transaction = await tracking.methods._Transaction().call();
      this.setState({ _Transaction });
      for (var i = 1; i <= _Transaction; i++) {
        const transaction = await tracking.methods.transactions(i).call();
        this.setState({
          transactions: [...this.state.transactions, transaction],
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert("Tracking contract not deployed to detected network");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      tracking: "",
      account: "",
      role: "",
      username: null,
      _Transaction: 0,
      _Vaccine: 0,
      _numberTransaction: 0,
      users: [],
      user: "",
      transactions: [],
      vaccines: [],
      loading: true,
      covid: "",
    };
    this.addUser = this.addUser.bind(this);
    this.addVaccine = this.addVaccine.bind(this);
    this.startTransaction = this.startTransaction.bind(this);
    this.goTransfer = this.goTransfer.bind(this);
    this.finishTransaction = this.finishTransaction.bind(this);
  }

  addUser(_user, _userName, _userRole) {
    this.setState({ loading: true });
    this.state.tracking.methods
      .addUser(_user, _userName, _userRole)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  addVaccine(_number, _name, _immune) {
    this.setState({ loading: true });
    this.state.tracking.methods
      .addVaccine(_number, _name, _immune)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  startTransaction(_numberVaccine, _amountVaccine) {
    this.setState({ loading: true });
    this.state.tracking.methods
      .startTransaction(_numberVaccine, _amountVaccine)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: true });
      });
  }

  goTransfer(_numberVaccine, _amountVaccine) {
    this.setState({ loading: true });
    this.state.tracking.methods
      .goTransfer(_numberVaccine, _amountVaccine)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  finishTransaction(_numberVaccine, _amountVaccine) {
    this.setState({ loading: true });
    this.state.tracking.methods
      .finishTransaction(_numberVaccine, _amountVaccine)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/countries/360")
      .then((resp) => resp.json())
      // .then((resp) => console.log(resp))
      .then((resp) => this.setState({ covid: resp }));
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar role={this.state.role} />
          <Switch>
            <Route exact path="/">
              <div className="h-screen">
                <div className="px-4 pt-3 mb-2.5">
                  <h1 className="text-xl font-semibold">
                    Hello {this.state.username}
                  </h1>
                </div>
                <hr className="bg-gray-500" />
                {/* Widget */}
                <div className="px-4 mt-4">
                  <div className="bg-blue-400 text-white px-3 py-4 rounded-lg">
                    <h1 className="text-md font-bold">Corona Virus Cases:</h1>
                    <p className="text-2xl font-sans font-bold">
                      {this.state.covid.cases}
                    </p>
                    <p className="mt-2 text-xs">Last Synced: </p>
                    <p className="mt-2 text-xs">
                      {moment
                        .unix(this.state.covid.updated / 1000)
                        .locale("gmt")
                        .format("dddd, MMMM D YYYY, h:mm a")}
                    </p>
                  </div>
                </div>

                {/* Widget 2 */}
                <div className="px-4 mt-4">
                  <div className="bg-green-400 text-white px-3 py-4 rounded-lg">
                    <h1 className="font-semibold text-md">Recovered:</h1>
                    <p className="text-md"> {this.state.covid.recovered}</p>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/user">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <User addUser={this.addUser} />
              )}
            </Route>
            <Route exact path="/vaccine">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Vaccine
                  vaccines={this.state.vaccines}
                  addVaccine={this.addVaccine}
                />
              )}
            </Route>
            <Route exact path="/producer">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Producer
                  transaction={this.state.transactions}
                  startTransaction={this.startTransaction}
                />
              )}
            </Route>
            <Route exact path="/distributor">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Distributor
                  transaction={this.state.transactions}
                  goTransfer={this.goTransfer}
                />
              )}
            </Route>
            <Route exact path="/doctor">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Doctor
                  transaction={this.state.transactions}
                  goTransfer={this.goTransfer}
                />
              )}
            </Route>
            <Route exact path="/patient">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Patient
                  transaction={this.state.transactions}
                  finishTransaction={this.finishTransaction}
                />
              )}
            </Route>
            <Route exact path="/tracking">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Alur transaction={this.state.transactions} />
              )}
            </Route>
          </Switch>

          {/* <Footer/> */}
        </Router>
      </div>
    );
  }
}

export default App;
