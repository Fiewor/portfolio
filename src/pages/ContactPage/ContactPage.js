import React from "react";
import {
  Grid,
  Column,
  FormGroup,
  Stack,
  TextInput,
  TextArea,
  Button,
} from "@carbon/react";
import { SendAlt } from "@carbon/react/icons";

const ContactPage = () => {
  const onSubmit = () => {};
  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <p>Get in touch...</p>
        <FormGroup
          style={{ maxWidth: "500px" }}
          // {...args}
        >
          <Stack gap={7}>
            <TextInput id="one" labelText="First Name (optional)" />
            <TextInput id="two" labelText="Last Name (optional)" />
            <TextInput id="two" labelText="Email (optional)" />
            <TextArea
              labelText="Message"
              // {...textareaProps}
            />
            <Button onClick={onSubmit} renderIcon={SendAlt}>
              Submit
            </Button>
          </Stack>
        </FormGroup>
      </Column>
    </Grid>
  );
};

export default ContactPage;
