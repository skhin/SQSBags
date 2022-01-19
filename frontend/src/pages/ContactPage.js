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
                <div className="col-lg-6">
                  <div className="card-shadow">
                    <img src={contactImg} className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-box ml-3">
                    <h1 className="font-weight-light mt-2">Quick Contact</h1>
                    <form className="mt-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="email address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mt-2">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                          >
                            <span> SUBMIT</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card mt-4 border-0 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="card-body d-flex align-items-center c-detail pl-0">
                          <div className="mr-3 align-self-center">
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
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
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
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
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                          </div>
                          <div className="">
                            <h6 className="font-weight-medium">Email</h6>
                            <p className="">
                              info@sqsbags.com
                              <br /> 123@wsqsbags.com
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
