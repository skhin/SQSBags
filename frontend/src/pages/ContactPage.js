import React from "react";
import "./ContactPage.css";
import contactImg from "./contact.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactPage = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">
        <strong>Contact Us</strong>
      </h2>
      <hr />
      <div className="container">
        <div className="contact3 py-5">
          <div className="row no-gutters">
            <div className="container">
              <div className="row">
                <div className="card-shadow">
                  <img
                    src={contactImg}
                    className="img-fluid contactImg"
                    alt="contactImg"
                  />
                </div>

                <div className="col-lg-6"></div>
                <div className="col-lg-12">
                  <div className="card mt-4 border-0 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="card-body d-flex align-items-center c-detail pl-0">
                          <div className="mr-3 align-self-center">
                            <img
                              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                              className="image__icon"
                              alt="icon"
                            />
                          </div>
                          <div className="">
                            <h6 className="font-weight-medium">Address</h6>
                            <p className="">
                              79 Anson Rd, Level 20
                              <br /> Singapore
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="card-body d-flex align-items-center c-detail">
                          <div className="mr-3 align-self-center">
                            <img
                              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                              className="image__icon"
                              alt="icon"
                            />
                          </div>
                          <div className="">
                            <h6 className="font-weight-medium">Phone</h6>
                            <p className="">
                              123 456 7890
                              <br /> 098 765 4321
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="card-body d-flex align-items-center c-detail">
                          <div className="mr-3 align-self-center">
                            <img
                              src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                              className="image__icon"
                              alt="icon"
                            />
                          </div>
                          <div className="">
                            <h6 className="font-weight-medium">Email</h6>
                            <p className="">
                              <a href="mailto:info@sqsbags.com">
                                info@sqsbags.com
                              </a>
                              <br />{" "}
                              <a href="mailto:123@sqsbags.com">
                                123@sqsbags.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="real__contact">
                    Or to contact us for real, you can reach us at:
                    <ul>
                      <li className="contact__sean">
                        Sean Yeo:{" "}
                        <a
                          href="https://www.linkedin.com/in/sean-yeo-52752632/"
                          target="noreferrer"
                        >
                          <LinkedInIcon />
                        </a>{" "}
                        {""}{" "}
                        <a href="https://github.com/yeosrs" target="noreferrer">
                          <GitHubIcon />
                        </a>
                      </li>
                      <li className="contact__qizhen">
                        Lim Qizhen:{" "}
                        <a
                          href="https://www.linkedin.com/in/qizhen-lim/"
                          target="noreferrer"
                        >
                          <LinkedInIcon />
                        </a>
                        {""}{" "}
                        <a
                          href="https://github.com/lim-Qizhen"
                          target="noreferrer"
                        >
                          <GitHubIcon />
                        </a>
                      </li>
                      <li className="contact__sireena">
                        Sireena Khin:{" "}
                        <a
                          href="https://www.linkedin.com/in/skhin/"
                          target="noreferrer"
                        >
                          <LinkedInIcon />
                        </a>
                        {""}{" "}
                        <a href="https://github.com/skhin" target="noreferrer">
                          <GitHubIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
