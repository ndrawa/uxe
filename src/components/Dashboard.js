import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="h-full mt-4">
        <div className="px-4 mb-2.5">
          <h1 className="text-xl font-semibold">Hay Name</h1>
        </div>
        <hr className="bg-gray-500" />
        {/* Widget */}
        <div className="px-4 mt-4">
          <div className="bg-blue-400 text-white px-3 py-4 rounded-lg">
            <h1 className="text-md font-bold">Corona Virus Cases:</h1>
            <p className="text-2xl font-sans font-bold">2.911.733</p>
            <p className="mt-2 text-xs">Last Synced 19 July 2021</p>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="px-4 mt-4">
          <div className="bg-green-400 text-white px-3 py-4 rounded-lg">
            <h1 className="font-semibold text-md">Recovered:</h1>
            <p className="text-md">2.293.875</p>
          </div>
        </div>
      </div>
    </>
  );
}
