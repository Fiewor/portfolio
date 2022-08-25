import React from "react";
import { Grid, Column } from "@carbon/react";
import useFormComponent from "../../components/useFormComponent";

const ContactPage = () => {
  let { isSubmitted, render } = useFormComponent();

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        {!isSubmitted ? (
          <>
            <p className="contact__text">
              Seen something you like? Or just wanna chat? Shoot me a message!
            </p>
            {render}
          </>
        ) : (
          <>
            <p className="contact__success-text">Message sent successfully!</p>
          </>
        )}
      </Column>
    </Grid>
  );
};

export default ContactPage;
