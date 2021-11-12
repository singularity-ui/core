import React from 'react'

import Icon from '../Icon'

const MaterialChevronRightSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
)

const MaterialChevronRight = props => <Icon as={MaterialChevronRightSvg} {...props} />

MaterialChevronRight.defaultProps = { ...Icon.defaultProps }

MaterialChevronRight.propTypes = { ...Icon.propTypes }

export default MaterialChevronRight
