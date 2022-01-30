import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 p-2 mt-3 inline-flex rounded-lg transition duration-300 hover:bg-opacity-90 text-white font-sans justify-center"
    >
      {children}
    </button>
  );
}
