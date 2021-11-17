/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import { Container, Row, Col } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { API_URL, postContactFormData } from "../../apiServices";

const contactMetro = "/img/contact_metro.png";
const contactPhone = "/img/contact_phone.png";
const contactEmail = "/img/contact_email.png";

function ContactForm({ data }) {
  const [emailError, setEmailError] = useState("");
  const [phoneError, setphoneError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Email Validation
  const validateEmail = (value) => {
    if (validator.isEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };

  // Phone Validation
  const validatePhone = (value) => {
    if (validator.isMobilePhone(value)) {
      setphoneError("");
    } else if (validator.isEmpty(value)) {
      setphoneError("");
    } else {
      setphoneError("Invalid Phone Number");
    }
  };

  const emptyForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
  };

  // On Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message && phoneError === "" && emailError === "") {
      try {
        const contactFormData = { name, email, phone, company, message };
        await postContactFormData(contactFormData);
        emptyForm();
        toast.success("We have received your response!");
      } catch (err) {
        toast.error(err?.response?.message);
      }
    }
  };

  return (
    <Container className="form-main">
      <Row className="Contact_form">
        <Col md={7} className="px-0">
          <form onSubmit={handleSubmit} className="contact_leftSide">
            <h1>Send A Message</h1>
            <div className="row">
              <div className="col-md-6 your_Name my-4">
                <label htmlFor="name" className="required">
                  Your Name
                </label>
                <br />
                <input
                  id="name"
                  name="name"
                  value={name}
                  className="effect-1 "
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 your_email my-4">
                <label htmlFor="userEmail" className="required">
                  Your Email
                </label>
                <br />
                <input
                  type="email"
                  value={email}
                  name="email"
                  id="userEmail"
                  onChange={(e) => {
                    validateEmail(e.target.value);
                    setEmail(e.target.value);
                  }}
                  required
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#ef2727",
                    fontSize: "10px",
                  }}
                >
                  {emailError}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 your_phone mb-5">
                <label htmlFor="userPhone">Phone</label>
                <br />
                <input
                  name="Phone"
                  value={phone}
                  className="effect-1"
                  type="phone"
                  id="userPhone"
                  onChange={(e) => {
                    validatePhone(e.target.value);
                    setPhone(e.target.value);
                  }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#ef2727",
                    fontSize: "10px",
                  }}
                >
                  {phoneError}
                </span>
              </div>
              <div className="col-md-6 your_company mb-5">
                <label htmlFor="Company">Company Name</label>
                <br />
                <input
                  id="Company"
                  name="Company"
                  value={company}
                  type="text"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="message" className="required">
                  Send a message
                </label>
                <div className="send-message-text-area">
                  <br />
                  <textarea
                    className="required"
                    value={message}
                    name="message"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary form-btn send-btn"
                  >
                    <FaTelegramPlane className="send-icon" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Col>
        <Col
          md={5}
          className="px-0 contact_rightSide"
          style={{ background: `url("${API_URL + data.backgroundImage.url}")` }}
        >
          <div className="contact_InnerRight">
            <h1>{data.heading}</h1>
            <div className="my-4">
              <div className="row">
                <div className="right_list right_list1 col-md-12">
                  <img src={contactMetro} alt="metro" loading="lazy" />
                  <p>{data.address}</p>
                </div>
              </div>
              <div className="row">
                <div className="right_list right_list2 col-md-12">
                  <img src={contactPhone} alt="phone" loading="lazy" />
                  <a href={`tel:+${data.phone}`}>
                    <p>+{data.phone}</p>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="right_list right_list3 col-md-12">
                  <img src={contactEmail} alt="mail" loading="lazy" />
                  <a href={`mailto:${data.email}`}>
                    <p>{data.email}</p>
                  </a>
                </div>
              </div>
              <div className="row mt-4 justify-content-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/Beyond+Eris+Solution/@25.0641917,55.1380504,15z/data=!4m5!3m4!1s0x0:0x129328696b35c383!8m2!3d25.0641917!4d55.1380504"
                >
                  <h2>Get Direction</h2>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

ContactForm.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactForm;
