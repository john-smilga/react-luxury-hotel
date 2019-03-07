import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default class Navbar extends Component {
  render() {
    const { toggleNavbar, showNavbar, navLinks } = this.props;
    console.log(this.props);

    return (
      <NavWrapper
        isOpen={showNavbar}
        className="d-flex align-items-center justify-content-center letter-spacing"
        onClick={toggleNavbar}
      >
        <nav>
          <ul>
            {navLinks.map(item => (
              <li key={item.id}>
                <Link to={item.path} onClick={toggleNavbar}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </NavWrapper>
    );
  }
}

Navbar.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired
};

const NavWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--primaryWhite);
  z-index: 2;
  /* last */
  transition: all 0.3s linear;
  transform: ${props =>
    props.isOpen ? "translateY(0%)" : "translateY(-100%)"};

  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  a {
    font-size: 2rem;
    display: block;
    text-transform: uppercase;
    color: var(--primaryBlack);
    transition: var(--primaryTransition);
    &:hover {
      color: var(--primaryColor);
      text-decoration: none;
    }
  }
`;
