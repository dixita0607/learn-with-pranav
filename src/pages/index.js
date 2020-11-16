import { graphql } from 'gatsby';
import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Tutorials, About, Testimonials, Skills } from 'components/landing';

export default ({ data }) => {
  const siteData = data?.allMarkdownRemark?.edges[0]?.node?.frontmatter;
  const {
    about,
    achievements,
    appLink,
    brief,
    channel,
    email,
    experience,
    phone,
    socialLinks,
    testimonials,
    title,
    tutorials
  } = siteData
  return (
    siteData
      ? (
        <Layout socialLinks={socialLinks} phone={phone} email={email}>
          <SEO />
          <Intro title={title} brief={brief} appLink={appLink} />
          <About about={about} />
          <Skills achievements={achievements} experience={experience} />
          <Tutorials tutorials={tutorials} channel={channel} />
          <Testimonials testimonials={testimonials} />
          <Contact />
        </Layout>
      )
      : <span>Loading...</span>
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            about
            achievements {
              achievement
            }
            appLink
            brief
            channel
            email
            experience {
              line
            }
            phone
            socialLinks {
              platform
              link
            }
            testimonials {
              author
              testimonial
            }
            title
            tutorials {
              id
              title
            }
          }
        }
      }
    }
}
`
