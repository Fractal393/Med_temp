import Link from "next/link";
import React, { Component } from "react";
import medicare from "../../images/medicare.png";
import Subscribe from "./Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NoSSR from "react-no-ssr";

class Footer extends Component {
  render() {
    const url =
      "https://yandex.us2.list-manage.com/subscribe/post?u=b70a5cce01fec12df1350b8e8&amp;id=8496b77d08";

    return (
      <footer className="footer-area bg-image">
        <NoSSR>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <Subscribe
                status={status}
                message={message}
                onSubmitted={(formData) => subscribe(formData)}
              />
            )}
          />
        </NoSSR>

        <div className="container">
          <div className="row">
            <Grid
              container
              direction="column"
              justify={"center"}
              alignItems={"center"}
              spacing={2}
            >
              {/* <Grid item>
                <div className="single-footer-widget">
                  <Link href="/">
                     <a className="logo">
                      <img src={medicare} alt="logo" />
                    </a> 
                  </Link>
                </div>
              </Grid> */}
              <Grid item>
                <div
                  className="social-icons-list "
                  style={{ marginTop: "15px" }}
                >
                  <ul className="social-list" style={{ paddingLeft: "0px" }}>
                    <li>
                      <a href="https://www.facebook.com/medicaregalaxy/">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/MedicareGalaxy">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/medicaregalaxy/">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/medicare-galaxy-llp">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Grid container alignItems={"center"} justify={"center"}>
              <Grid item>
                <div className="copyright-area" style={{ marginTop: "20px" }}>
                  <div className="container">
                    <div className="row h-50 justify-content-center align-items-center">
                      <div
                        className="col-lg-12 col-md-12"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
