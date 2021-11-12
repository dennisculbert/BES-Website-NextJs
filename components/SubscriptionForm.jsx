/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import { InputGroup, FormControl, Button, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const extractContent = (data) => {
  const span = document.createElement("span");
  span.innerHTML = data;
  return span.textContent || span.innerText;
};

const FooterSubscriptionForm = ({ status, message, onValidated }) => {
  useEffect(() => {
    if (status) {
      if (status === "success")
        toast.success("You have successfully Subscribed !");
      if (status === "error") toast.error(extractContent(message));
    }
  }, [status, message]);

  let email;

  const OnSubmit = () => {
    onValidated({
      EMAIL: email.value,
    });
    email.value = "";
  };

  return (
    <>
      <Col md={6} className="col-12 contact-box">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email here"
            aria-label="Email here"
            aria-describedby="basic-addon2"
            className="email_input_field"
            ref={(node) => {
              email = node;
            }}
          />
        </InputGroup>
        <div className="sendus-btn">
          <Button className="email_send_btn" onClick={OnSubmit}>
            Subscribe
          </Button>
        </div>
        {status === "sending" && (
          <div style={{ color: "white" }}>Sending Request ...</div>
        )}
      </Col>
    </>
  );
};

const BlogPageSubscriptionForm = ({ status, message, onValidated }) => {
  useEffect(() => {
    if (status && message) {
      if (status === "success")
        toast.success("You have successfully Subscribed !");
      if (status === "error") toast.error(extractContent(message));
    }
  }, [status, message]);

  let name;
  let email;

  const OnSubmit = () => {
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });
    email.value = "";
    name.value = "";
  };

  return (
    <>
      <Form className="trend_form px-3 pt-1 pb-1">
        <p>Subscribe to our newletter</p>
        <input
          type="text"
          name="firstName"
          className="search_bar"
          placeholder="Name"
          ref={(node) => {
            name = node;
          }}
        />
        <input
          type="email"
          name="email"
          className="search_bar"
          placeholder="Email Address"
          ref={(node) => {
            email = node;
          }}
        />
        <div>
          <button
            type="button"
            className="subscribe_trend my-1"
            onClick={OnSubmit}
          >
            SUBSCRIBE
          </button>
        </div>
        {status === "sending" && (
          <div style={{ color: "#005F9E", fontSize: "12px" }}>
            Sending Request ...
          </div>
        )}
      </Form>
    </>
  );
};

export { FooterSubscriptionForm, BlogPageSubscriptionForm };
