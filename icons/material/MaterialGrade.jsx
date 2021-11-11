import React from 'react'

import Icon from '../Icon'

const MaterialGradeSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const MaterialGrade = props => <Icon as={MaterialGradeSvg} {...props} />

MaterialGrade.defaultProps = { ...Icon.defaultProps }

MaterialGrade.propTypes = { ...Icon.propTypes }

export default MaterialGrade
