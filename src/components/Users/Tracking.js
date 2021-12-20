import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import moment from 'moment';

class Tracking extends Component {
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

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({result:keyword})
  }

  render(){
    // var moment = require('moment');
    const items = this.props.transaction.filter((data)=>{
      if(this.state.result == null)
        return data
      else if(data.numberVaccine.toString().includes(this.state.result)){
        return data
      } else {
        return null
      }
    }).map((data, key)=>{
      return(
        <tr key={key}>
          {/* <td>{moment(Number(transaction.time.toString()))}</td> */}
          <td>{moment.unix(data.time).locale('id').format("LL, h:mm a")}</td>
          {/* <th scope="row">{transaction.numberTransaction.toString()}</th> */}
          {/* <td>{window.web3.utils.formWei(vaccine.number.toString(), 'Ether')}</td> */}
          {/* <td>{data.numberVaccine.toString()}</td> */}
          {/* <td>{transaction.amountVaccine.toString()}</td> */}
          <td>{data.receiver}</td>
          <td>{data.sender}</td>
        </tr>
        
      )
    })

    return (
      <div>
        {(() => {
            if (this.state.result === 'No result') {
              return (
                <div>
                  <QrReader className="qr-image-wrapper"
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '300px' }}
                  />
                  {/* <p>{this.state.result}</p> */}
                </div>
              )
            }
          })()}
        <h2>Tracking</h2>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Time</th>
              {/* <th scope="col">No. Transaction</th> */}
              {/* <th scope="col">No. Batch</th> */}
              {/* <th scope="col">Total</th> */}
              <th scope="col">Receiver</th>
              <th scope="col">Sender</th>
            </tr>
          </thead>
          <tbody id="trackingList">
            { items }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Tracking;