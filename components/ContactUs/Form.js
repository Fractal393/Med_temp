import React, { Component } from "react";
import contactImage from "../../images/call.jpg";

class Form extends Component {
  render() {
    return (
      <section className="contact-area pt-50">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src={contactImage} alt="image" />
            </div>

            <div className="col-lg-6 col-md-12">
              <form
                id="contactForm"
                method="POST"
                action="https://script.google.com/a/medicaregalaxy.in/macros/s/AKfycbw4H6kVXwVstWkavL96cm5n_EjXQocRSogA99fzzw/exec"
              >
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        required={true}
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        required={true}
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
