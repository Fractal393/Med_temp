import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="page-title-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Events</h2>
            </div>
          </div>
        </div>

        <div className="shape3">
          <img src={require("../../images/shape3.png")} alt="img" />
        </div>
        <div className="shape6">
          <img src={require("../../images/shape6.png")} alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src={require("../../images/shape8.png")} alt="shape" />
        </div>
        <div className="shape9">
          <img src={require("../../images/shape9.svg")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Banner;
