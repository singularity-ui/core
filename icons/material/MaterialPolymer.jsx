import React from 'react'

import Icon from '../Icon'

const MaterialPolymerSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" />
  </svg>
)

const MaterialPolymer = props => <Icon as={MaterialPolymerSvg} {...props} />

MaterialPolymer.defaultProps = { ...Icon.defaultProps }

MaterialPolymer.propTypes = { ...Icon.propTypes }

export default MaterialPolymer
