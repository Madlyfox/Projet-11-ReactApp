import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../scss/home.scss";
import Logements from "../components/Logements";
import Footer from "../components/Footer";
import imgBackground from "../img/IMG.png";

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Navbar />
        <header>
          <div className="holder">
            <img src={imgBackground} alt="" />
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </header>
        <main>
          <Logements />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
