import React, { Component } from "react";
import javascriptLogo from "../../images/icons/delivery.png";
import androidLogo from "../../images/icons/wheelchair.png";
import cloudLogo from "../../images/icons/disinfectant.png";
import reactLogo from "../../images/icons/location.png";
import machineLogo from "../../images/icons/sale.png";
import pythonLogo from "../../images/icons/medicine.png";
import websiteLogo from "../../images/icons/satisfaction.png";
import iotLogo from "../../images/icons/whatsapp.png";

class Technologies extends Component {
  render() {
    return (
      <section
        className="services-area ptb-100"
        style={{ background: "#225195" }}
      >
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "white" }}>Services</h2>
            <div className="bar" style={{ background: "white" }} />
            <p style={{ color: "white" }}>
              We offer a wide vareity of services, here's a gist
            </p>
            {/*<a href={"#"} className="btn btn-primary mt-2">*/}
            {/*  Add More*/}
            {/*</a>*/}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={websiteLogo} alt="website" />
                <h3>Customer Satisfaction</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={androidLogo} alt="android" />

                <h3>Wheelchair Accesibility</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={cloudLogo} alt="cloud logo" />

                <h3>Safety Regulations</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={machineLogo} alt="machine" />
                <h3>Discounted Rates</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={iotLogo} alt="iot" />
                <h3>Whatsapp Orders</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={pythonLogo} alt="python" />

                <h3>Self-Manufactured Medicines</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={javascriptLogo} alt="javascript" />
                <h3>Home Delivery</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <img src={reactLogo} alt="react" />

                <h3>Multiple Locations</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies;
