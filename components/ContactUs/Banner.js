import React from "react";

const Banner = () => {
  return (
    <section
      className="page-title-banner"
      style={{ paddingBottom: "0px", background: "#225195" }}
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 style={{ color: "white" }}> Let's Chat!</h2>
            <div className="bar" style={{ background: "white" }} />
            <p style={{ color: "white" }}>
              To place an order or to get in touch with us call us or email us
              and we will try to respond ASAP!
            </p>
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
};

export default Banner;
