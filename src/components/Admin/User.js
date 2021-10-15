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
          <div className="form-group mr-sm-2">
            <input
            id="userAddress"
            type="password"
            ref={(input) => {this._user = input}}
            className="form-control"
            placeholder="address"
            required/>
          </div>

          <div className="form-group mr-sm-2">
            <input
            id="userName"
            type="text"
            ref={(input) => {this._userName = input}}
            className="form-control"
            placeholder="string"
            required/>
          </div>

          <div className="form-group mr-sm-2">
            <input
            id="userRole"
            ref={(input) => {this._userRole = input}}
            type="number"
            className="form-control"
            placeholder="uint"
            required/>
          </div>
          <button type="submit" className="btn btn-primary">Add User</button>
        </form>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export default User;
