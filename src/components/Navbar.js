import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <div>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          {/* <Link className="navbar-item" to="/products">
          Products
        </Link> */}
          {/* <Link className="navbar-item" to="/contact">
          Contact
        </Link> */}
          {/* <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
          <Link className="navbar-item" to="/scriptures">
            Scriptures
          </Link>
        </div>
      </div>
    </nav>
    <div className="container"><b>Theory A</b></div>
  </div>
);

export default Navbar
