import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="h-screen">
        <div className="px-4 mb-2.5 pt-3">
          <h1 className="text-xl font-semibold">Tambah User</h1>
        </div>
        <hr className="bg-gray-500" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const _user = this._user.value;
            const _userName = this._userName.value;
            const _userRole = this._userRole.value;
            this.props.addUser(_user, _userName, _userRole);
          }}
          className="mt-4 flex flex-col px-12"
        >
          <p>Address</p>
          <input
            id="userAddress"
            type="password"
            ref={(input) => {
              this._user = input;
            }}
            placeholder="Address"
            required
            className="mt-1 p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          />
          <p>Nama</p>
          <input
            id="userName"
            type="text"
            ref={(input) => {
              this._userName = input;
            }}
            placeholder="Name"
            required
            className="p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          />
          <p>Role</p>
          <select
            name="selectList"
            id="userRole"
            ref={(input) => {
              this._userRole = input;
            }}
            type="number"
            className="bg-white mt-1 p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          >
            <option value="1">Producer</option> 
            <option value="2">Distributor</option> 
            <option value="3">Vaccinator</option> 
            <option value="4">Patient</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 p-2 mt-3 inline-flex rounded-lg transition duration-300 hover:bg-opacity-90 text-white font-sans justify-center"
          >
            Simpan
          </button>
        </form>
      </div>
    );
  }
}

export default User;
