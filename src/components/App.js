import React, { Component } from 'react';
// import logo from '../logo.png';
import Web3 from 'web3';
import './App.css';
import Tracking from '../abis/Tracking.json'
import Navbar from './Navbar';
import User from './Admin/User';
import Vaccine from './Admin/Vaccine';
import Producer from './Users/Producer';
import Distributor from './Users/Distributor';
import Doctor from './Users/Doctor';
import Patient from './Users/Patient';

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
      // console.log(user)
      this.setState({ role: user.role});


      for (var index = 0; index < 9; index++) {
        const vaccine = await tracking.methods.vaccines(index).call()
        this.setState({
          vaccines: [...this.state.vaccines, vaccine]
        })
      }
      this.setState({loading: false})
      // console.log(this.state.vaccines)
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
      _Transaction: 0,
      _numberTransaction: 0,
      users: [],
      transaction: [],
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
      this.setState({loading: false})
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
        <Navbar account={this.state.account}/>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              {this.state.loading
                ? <div id="loader" className="text-center">
                    <p className="text-center">
                      Loading...
                      {/* {window.location.reload()} */}
                    </p>
                  </div>
                  // : <User addUser={this.addUser}/>
                  // : <Vaccine 
                  // vaccines={this.state.vaccines}
                  // addVaccine={this.addVaccine}/>
                  : <Producer startTransaction={this.startTransaction}/>
                  // : <Distributor goTransfer={this.goTransfer}/>
                  // : <Doctor goTransfer={this.goTransfer}/>
                  // : <Patient finishTransaction={this.finishTransaction}/>
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
