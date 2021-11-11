import React from 'react'

import Icon from '../Icon'

const MaterialSegmentSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z" />
  </svg>
)

const MaterialSegment = props => <Icon as={MaterialSegmentSvg} {...props} />

MaterialSegment.defaultProps = { ...Icon.defaultProps }

MaterialSegment.propTypes = { ...Icon.propTypes }

export default MaterialSegment
