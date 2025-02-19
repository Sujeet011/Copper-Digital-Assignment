import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#333", padding: "10px", color: "#fff" }}>
      <h2>Cancer Data Dashboard</h2>
      <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
