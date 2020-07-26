import React from 'react'
import PropTypes from 'prop-types'
import { TutorialsPageTemplate } from '../../templates/tutorials-page'

const TutorialsPagePreview = ({ entry }) => {

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []
  const tutorials = entry.getIn(['data', 'tutorials']).toJS();

  return (
    <TutorialsPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      testimonials={testimonials}
      tutorials={tutorials}
    />
  )
}

TutorialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TutorialsPagePreview
