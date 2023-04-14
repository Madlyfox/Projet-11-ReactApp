import React, { Component } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Logo />

        <ul className="links">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/About"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
