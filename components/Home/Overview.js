/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import why from "../../images/why.jpg";
import delivery from "../../images/delivery.png";
import homeLastImage from "../../images/discount.png";

class Overview extends Component {
  render() {
    return (
      <section className="overview-section ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src={delivery} alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Get doorstep delivery</h2>
                    <div className="bar" />
                    <p>
                      Send us your prescription on WhatsApp and get a delivery
                      within 48 hours. Save yourself a trip, order online at
                      cheap rates. Stay home and stay safe and get your
                      medicines delivered with all the safety precautions in
                      place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Why Medicare?</h2>
                    <div className="bar" />
                    <p>
                      We strive to provide medicines at a cheaper cost and
                      deliver a wholesome experience to you without burning a
                      hole in your pocket. We have various facilities to make
                      your life in these stressful times a little more easier,
                      because, health comes first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 overview-img">
                <img src={why} alt="image" />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 overview-img">
                <img src={homeLastImage} alt="image" />
              </div>

              <div className="col-lg-6 col-md-6 overview-content">
                <div className="features-holder-content">
                  <div className="section-title">
                    <h2>Grow With Us</h2>
                    <div className="bar" />
                    <p>
                      Open a customer"s account and get the benefit of easier
                      billing, first access to offers and monthly delivery of
                      medicines without having to contact us all the time for
                      your regular medicinal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <div className="shape7">
          <img src={require("../../images/shape7.png")} alt="shape" />
        </div> */}
        <div className="shape3">
          <img src={require("../../images/shape3.png")} alt="img" />
        </div>
        <div className="bg-gray shape-1" />
        <div className="shape6">
          <img src={require("../../images/shape6.png")} alt="img" />
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
        <div className="shape11 rotateme">
          <img src={require("../../images/shape11.png")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default Overview;
