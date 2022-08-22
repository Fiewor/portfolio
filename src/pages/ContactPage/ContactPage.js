import React, { useState } from "react";
import {
  Grid,
  Column,
  Form,
  FormGroup,
  Stack,
  TextInput,
  TextArea,
  Button,
} from "@carbon/react";
import { SendAlt } from "@carbon/react/icons";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [messageDetails, setMessageDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = messageDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageDetails({ ...messageDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      REACT_APP_EMAILJS_TEMPLATE_ID: templateId,
      REACT_APP_EMAILJS_SERVICE_ID: serviceId,
      REACT_APP_EMAILJS_PUBLIC_KEY: publicKey,
    } = process.env;

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <p className="contact__text">
          Seen something you like? Or just wanna chat? Shoot me a message!
        </p>
        <Form
          className="contact__form"
          // {...args}awgd\+
        >
          <Stack gap={7}>
            <TextInput
              name="firstName"
              labelText="First Name (optional)"
              onChange={handleChange}
              value={firstName}
            />
            <TextInput
              name="lastName"
              labelText="Last Name (optional)"
              onChange={handleChange}
              value={lastName}
            />
            <TextInput
              name="email"
              labelText="Email (optional)"
              onChange={handleChange}
              value={email}
            />
            <TextArea
              labelText="Message"
              name="message"
              onChange={handleChange}
              value={message}
              required
              // {...textareaProps}
            />
            <Button type="submit" onClick={handleSubmit} renderIcon={SendAlt}>
              Send
            </Button>
          </Stack>
        </Form>
      </Column>
    </Grid>
  );
};

export default ContactPage;
