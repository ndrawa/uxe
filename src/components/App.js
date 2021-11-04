import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Tracking from '../abis/Tracking.json'
import Header from './Header';
// import Navbar from './Navbar';
// import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import User from './Admin/User';
import Vaccine from './Admin/Vaccine';
import Producer from './Users/Producer';
import Distributor from './Users/Distributor';
import Doctor from './Users/Doctor';
import Patient from './Users/Patient';
import Alur from './Users/Tracking';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      // await window.ethereum.send('eth_requestAccounts')
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.componentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0]});
    const networkId = await web3.eth.net.getId()
    const networkData = Tracking.networks[networkId]
    
    if (networkData) {
      const tracking = web3.eth.Contract(Tracking.abi, networkData.address)
      // console.log(tracking)
      this.setState({tracking})
      // const user = await tracking.methods.users(1).call()
      const user = await tracking.methods.users(accounts[0]).call()
      console.log(user)
      this.setState({ role: user.role});
      this.setState({username : user.name});

      const _Vaccine = await tracking.methods._Vaccine().call()
      // console.log(_Vaccine.toString())
      this.setState({ _Vaccine })
      for (var index = 0; index < _Vaccine; index++) {
        const vaccine = await tracking.methods.vaccines(index).call()
        this.setState({
          vaccines: [...this.state.vaccines, vaccine]
        })
      }
      this.setState({loading: false})
      // console.log(this.state.vaccines)

      const _Transaction = await tracking.methods._Transaction().call()
      // console.log(_Transaction.toString())
      this.setState({_Transaction})
      for (var i = 1; i <= _Transaction; i++) {
        const transaction = await tracking.methods.transactions(i).call()
        this.setState({
          transactions: [...this.state.transactions, transaction]
        })
      }
      this.setState({loading: false})
      console.log(this.state.transactions)

    } else {
      window.alert("Tracking contract not deployed to detected network")
    }

    // console.log(Tracking.abi)
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      role: '',
      username: null,
      _Transaction: 0,
      _Vaccine: 0,
      _numberTransaction: 0,
      users: [],
      transactions: [],
      vaccines: [],
      loading: true

    }
    this.addUser = this.addUser.bind(this)
    this.addVaccine = this.addVaccine.bind(this)
    this.startTransaction = this.startTransaction.bind(this)
    this.goTransfer = this.goTransfer.bind(this)
    this.finishTransaction = this.finishTransaction.bind(this)
  }

  addUser(_user, _userName, _userRole) {
    this.setState({loading: true})
    this.state.tracking.methods.addUser(_user, _userName, _userRole).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }

  addVaccine(_number, _name, _immune) {
    this.setState({loading: true})
    this.state.tracking.methods.addVaccine(_number, _name, _immune).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }

  startTransaction(_numberVaccine, _amountVaccine) {
    this.setState({loading: true})
    this.state.tracking.methods.startTransaction(_numberVaccine, _amountVaccine).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: true})
    })
  }

  goTransfer(_numberVaccine, _amountVaccine) {
    this.setState({loading: true})
    this.state.tracking.methods.goTransfer(_numberVaccine, _amountVaccine).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }

  finishTransaction(_numberVaccine, _amountVaccine) {
    this.setState({loading: true})
    this.state.tracking.methods.finishTransaction(_numberVaccine, _amountVaccine).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Header name={this.state.username}/> 
            <div className="container-fluid mt-4">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex text-center">
                  <Switch>
                    <Route exact path='/'>

                      <h1>Home {this.state.username}</h1>
                      
                    </Route>
                    <Route exact path='/user'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <User addUser={this.addUser}/>
                      }
                    </Route>
                    <Route exact path='/vaccine'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Vaccine 
                              vaccines={this.state.vaccines}
                              addVaccine={this.addVaccine}
                            />
                      }
                    </Route>
                    <Route exact path='/producer'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Producer
                            transaction={this.state.transactions}
                            startTransaction={this.startTransaction}
                          />
                      }
                    </Route>
                    <Route exact path='/distributor'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Distributor 
                              transaction={this.state.transactions}
                              goTransfer={this.goTransfer}
                            />
                      }
                    </Route>
                    <Route exact path='/doctor'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Doctor
                              transaction={this.state.transactions}
                              goTransfer={this.goTransfer}
                            />
                      }
                    </Route>
                    <Route exact path='/patient'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Patient
                              transaction={this.state.transactions}
                              finishTransaction={this.finishTransaction}
                            />
                      }
                    </Route>
                    <Route exact path='/tracking'>
                      {this.state.loading
                        ? <div id="loader" className="text-center">
                            <p className="text-center">
                              Loading...
                            </p>
                          </div>
                          : <Alur 
                              transaction={this.state.transactions}
                            />
                      }
                    </Route>
                  </Switch>
                </main>
              </div>
            </div>
          {/* <Footer/> */}
        </Router>
      </div>
    );
  }
}

export default App;
