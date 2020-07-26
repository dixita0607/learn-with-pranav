import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import TutorialsRoll from '../components/TutorialsRoll';

export const TutorialsPageTemplate = ({
                                        title,
                                        description,
                                        testimonials,
                                        tutorials
                                      }) => (
  <div className="content">
    <div
      className="full-width-image-container"
      style={{
        // backgroundImage: `url(${
        //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        // })`,
        height: '150px',
        marginBottom: 0
        // width: 'unset'
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #0074DE, -0.5rem 0 0 #0074DE',
          backgroundColor: '#0074DE',
          color: 'white',
          padding: '1rem',
          marginBottom: 0
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <p>{description}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <TutorialsRoll tutorials={tutorials} />
            <div className="column is-12 has-text-centered">
              <Link className="btn" target="_blank"
                    to="https://www.youtube.com/channel/UCKxrMleG0D352dCvTQajD1w?view_as=subscriber?sub_confirmation=1">
                Go to Channel
              </Link>
            </div>
          </div>
        </div>
        {/*<div className="columns">*/}
        {/*  <div className="column is-10 is-offset-1">*/}
        {/*    <h3 className="has-text-weight-semibold is-size-2">*/}
        {/*      Testimonials*/}
        {/*    </h3>*/}
        {/*    <Testimonials testimonials={testimonials} />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  </div>
)

TutorialsPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  tutorials: PropTypes.array
}

const TutorialsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TutorialsPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
        tutorials={frontmatter.tutorials}
      />
    </Layout>
  )
}

TutorialsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TutorialsPage

export const tutorialsPageQuery = graphql`
  query TutorialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        testimonials {
          author
          quote
        }
        tutorials {
          title
          id
          description
        }
      }
    }
  }
`
