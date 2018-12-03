import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Logo = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 5px;
`;

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Logo>Theory A</Logo>
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
);

export default Navbar
