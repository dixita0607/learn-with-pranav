import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Tutorials, About, Testimonials, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <About />
    <Skills />
    <Tutorials />
    <Testimonials />
    <Contact />
  </Layout>
);
