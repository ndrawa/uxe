import React, { Component } from 'react';

class Vaccine extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Vaccines</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const _number = this._number.value
          const _name = this._name.value
          const _immune = this._immune.value
          this.props.addVaccine(_number,_name,_immune)
        }}>
          <div className="form-group mr-sm-2 mt-4">
            <input
            id="vaccineNumber"
            type="text"
            ref={(input) => {this._number = input}}
            className="form-control"
            placeholder="No. Batch"
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-3">
            <input
            id="vaccineName"
            type="text"
            ref={(input) => {this._name = input}}
            className="form-control"
            placeholder="Name"
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-3">
            <input
            id="vaccineDescription"
            ref={(input) => {this._immune = input}}
            type="text"
            className="form-control"
            placeholder="Description"
            required/>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Add Vaccine</button>
        </form>
        <p>&nbsp;</p>
        <h2>Vaccines</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">No. Batch</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody id="vaccineList">
            {this.props.vaccines.map((vaccine, key) =>{
              return(
                <tr key={key}>
                  <th scope="row">{vaccine.number.toString()}</th>
                  <td>{vaccine.number.toString()}</td>
                  {/* <td>{window.web3.utils.formWei(vaccine.number.toString(), 'Ether')}</td> */}
                  <td>{vaccine.name}</td>
                  <td>{vaccine.immune}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Vaccine;
