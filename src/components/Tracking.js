import React from "react";

export default function Tracking() {
  return (
    <>
      <div className="h-screen bg-gray-200">
        <div className="mt-4 bg-white">
          <div className="px-4 mb-2.5">
            <h1 className="text-xl font-semibold">Tracking</h1>
          </div>
          <hr className="bg-gray-500" />
        </div>

        <div className="bg-white">
          <div className="px-4 pt-4 pb-10">
            <h1 className="text-lg font-semibold">Status Pengiriman</h1>
            <div className="mt-3 flex relative justify-between text-md">
              <p>Gudang Nasional</p>
              <p className="font-semibold">Indra Yahudi</p>
            </div>
            <p className="text-sm">21-03-2020 14:50</p>
          </div>
        </div>
      </div>
    </>
  );
}
