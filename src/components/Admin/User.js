import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add User</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const _user = this._user.value
          const _userName = this._userName.value
          const _userRole = this._userRole.value
          this.props.addUser(_user,_userName,_userRole)
        }}>
          <div className="form-group mr-sm-2 mt-4">
            <input
            id="userAddress"
            type="password"
            ref={(input) => {this._user = input}}
            className="form-control"
            placeholder="Address"
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-3">
            <input
            id="userName"
            type="text"
            ref={(input) => {this._userName = input}}
            className="form-control"
            placeholder="Name"
            required/>
          </div>

          <div className="form-group mr-sm-2 mt-3">
            {/* <input
            id="userRole"
            ref={(input) => {this._userRole = input}}
            type="number"
            className="form-control"
            placeholder="uint"
            required/> */}
            <select name="selectList" id="userRole" ref={(input) => {this._userRole = input}}>
              <option value="1">Producer</option>
              <option value="2">Distributor</option>
              <option value="3">Doctor</option>
              <option value="4">Patient</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Add User</button>
        </form>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export default User;
