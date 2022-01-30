import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ children, rute }) {
  return (
    <Link to={rute}>
      <div className="flex flex-col items-center">{children}</div>
    </Link>
  );
}
