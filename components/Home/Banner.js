/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

import homeImage from "../../images/pharmacy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

class Banner extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-banner marketing-home">
          <div className="d-table">
            <div className="d-table-cell">
              <div style={{ marginLeft: "150px" }} className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content">
                      <link
                        href="https://fonts.googleapis.com/css?family=Rubik"
                        rel="stylesheet"
                      />

                      <h1 style={{ color: "#235196" }}>
                        Medicare Galaxy LLP <br />
                      </h1>
                      <p>
                        We are a Wholesale & Retail Pharmacy, All Medicines are
                        available at a Wholesale Price.
                      </p>

                      <a
                        href="https://wa.me/919248020161"
                        className="btn btn-primary"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray shape-1"></div>
          <div className="shape3">
            <img src={require("../../images/shape3.png")} alt="img" />
          </div>
          <div className="shape8 rotateme">
            <img src={require("../../images/shape8.png")} alt="shape" />
          </div>
          <div className="shape9">
            <img src={require("../../images/shape9.svg")} alt="shape" />
          </div>
          <div className="shape10">
            <img src={require("../../images/shape10.png")} alt="shape" />
          </div>

          <div className="bubble-animate">
            <div className="circle small square1"></div>
            <div className="circle small square2"></div>
            <div className="circle small square3"></div>
            <div className="circle small square5"></div>
            <div className="circle medium square1"></div>
            <div className="circle medium square3"></div>
            <div className="circle medium square4"></div>
            <div className="circle medium square5"></div>
            <div className="circle large square1"></div>
            <div className="circle large square2"></div>
            <div className="circle large square4"></div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    );
  }
}

export default Banner;
