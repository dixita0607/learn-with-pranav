import React from 'react'
import PropTypes from 'prop-types'

class TutorialsRoll extends React.Component {
  render() {
    const { tutorials } = this.props
    console.log('DATA', this.props);

    return (
      <div className="columns is-multiline">
        {
          tutorials.map(tutorial => (
            <div className="column is-4-desktop is-12-mobile">
              <div className="card">
                <div className="card-content">
                  <iframe style={{ width: '100%', backgroundColor: '#EEEEEE' }} height="206"
                          src={`https://www.youtube.com/embed/${tutorial.url}`} />
                </div>
                <div className="card-header-title video-title">
                  <span style={{
                    maxWidth: '400px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>{tutorial.title}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
};

export default TutorialsRoll;

TutorialsRoll.propTypes = {
  tutorials: PropTypes.array,
}
