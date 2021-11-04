import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class Patient extends Component {
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

  render() {
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
          <td>{data.time.toString()}</td>
          {/* <th scope="row">{transaction.numberTransaction.toString()}</th> */}
          {/* <td>{window.web3.utils.formWei(vaccine.number.toString(), 'Ether')}</td> */}
          <td>{data.numberVaccine.toString()}</td>
          {/* <td>{transaction.amountVaccine.toString()}</td> */}
          <td>{data.sender}</td>
          {/* <td>{data.receiver}</td> */}
        </tr>
        
      )
    })

    return (
      <div id="content">
        <h1>&ensp;&emsp;&emsp;Scan Qr Code&emsp;&emsp;&ensp;</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const _numberVaccine = this._numberVaccine.value
          const _amountVaccine = this._amountVaccine.value
          this.props.finishTransaction(_numberVaccine,_amountVaccine)
        }}>
          <div>
            <QrReader className="qr-image-wrapper"
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '300px' }}
            />
            {/* <p>{this.state.result}</p> */}
          </div>

            <div className="form-group mr-sm-2 mt-4">
              <input
              id="_numberVaccine"
              type="text"
              ref={(input) => {this._numberVaccine = input}}
              className="form-control"
              value={this.state.result}
              disabled
              required/>
            </div>

            <div className="form-group mr-sm-2 mt-3">
              <input
              id="_amountVaccine"
              type="text"
              ref={(input) => {this._amountVaccine = input}}
              className="form-control"
              value={this.state.result}
              disabled
              required
              hidden/>
            </div>
          
          <button type="submit" className="btn btn-primary mt-4">Accept Vaccine</button>
          
        </form>
        <p>&nbsp;</p>
        <h2>Tracking</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">No. Batch</th>
              <th scope="col">Actor</th>
              {/* <th scope="col">Description</th> */}
            </tr>
          </thead>
          <tbody id="vaccineList">
            { items }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Patient;
