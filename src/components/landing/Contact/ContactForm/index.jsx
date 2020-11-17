import React from 'react';
import { Button, Input, TextArea } from 'components/common';
import { Center } from './styles';

export default () => (
  <form name="contact" netlify-honeypot="bot-field" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Input
      type="text"
      name="name"
      component="input"
      aria-label="name"
      placeholder="Full name*"
      required
    />
    <Input
      id="email"
      aria-label="email"
      component="input"
      type="email"
      name="email"
      placeholder="Email"
    />
    <Input
      id="phone"
      aria-label="phone number"
      component="input"
      type="phone"
      name="phone"
      placeholder="Phone Number"
    />
    <TextArea
      type="textarea"
      aria-label="message"
      id="message"
      rows="4"
      name="message"
      placeholder="Message*"
      required
    />
    <Center>
      <Button secondary type="submit">
        Submit
      </Button>
    </Center>
  </form>
);
