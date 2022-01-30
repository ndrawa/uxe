import React from "react";
import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <div className="h-full">
        <div className="px-4 mb-2.5 mt-4">
          <h1 className="text-xl font-semibold">Tambah User</h1>
        </div>
        <hr className="bg-gray-500" />
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col px-12">
          <p>Address</p>
          <input
            id="userAddress"
            type="password"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
            className="mt-1 p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          />
          <p>Nama</p>
          <input
            id="userName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          />
          <p>Role</p>

          <select
            name="selectList"
            id="userRole"
            className="bg-white mt-1 p-2.5 mb-6 border-2 border-gray-300 rounded-lg"
          >
            <option value="1">Producer</option> 
            <option value="2">Distributor</option> 
            <option value="3">Doctor</option> <option value="4">Patient</option>
          </select>
          <Button> Simpan </Button>
        </form>
      </div>
    </>
  );
}
