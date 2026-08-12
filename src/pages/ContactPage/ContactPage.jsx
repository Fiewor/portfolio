import React, { useState } from "react";
import { Grid, Column } from "@carbon/react";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        {!isSubmitted ? (
          <>
            <p className="contact__text">
              Seen something you like? Or just wanna chat? Shoot me a message!
            </p>
            <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
          </>
        ) : (
          <p className="contact__success-text">Message sent successfully!</p>
        )}
      </Column>
    </Grid>
  );
};

export default ContactPage;
