import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Logo = styled(Link)`
  color: red;
  font-size: 30px;
  margin-left: 5px;
`;

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Logo to="/">Theory A</Logo>
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/scriptures">
          What is Theory A?
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
      </div>
    </div>
  </nav>
);

export default Navbar
