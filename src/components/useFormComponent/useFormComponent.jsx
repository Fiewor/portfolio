import React, { useState } from "react";
import { Form, Stack, TextInput, TextArea, Button } from "@carbon/react";
import { SendAlt } from "@carbon/react/icons";
import emailjs from "@emailjs/browser";

const useFormComponent = () => {
  const [messageDetails, setMessageDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { firstName, lastName, email, message } = messageDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageDetails({ ...messageDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) setIsSubmitted(true);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };
  return {
    isSubmitted,
    render: (
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
    ),
  };
};

export default useFormComponent;
