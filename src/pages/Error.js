import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../scss/error.scss";
import Footer from "../components/Footer";

export default class Error extends Component {
  render() {
    return (
      <div className="errContainer">
        <Navbar />

        <main>
          <div className="content">
            <h1 className="error">404</h1>
            <h2 className="errSub">
              Oups, la page que vous demandez n'existe pas.
            </h2>
            <Link to="/">Retourner à la page d'acceuil</Link>
          </div>
        </main>
      </div>
    );
  }
}
