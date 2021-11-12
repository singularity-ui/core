import React from 'react'

import Icon from '../Icon'

const MaterialPlayArrowSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
)

const MaterialPlayArrowSharp = props => <Icon as={MaterialPlayArrowSharpSvg} {...props} />

MaterialPlayArrowSharp.defaultProps = { ...Icon.defaultProps }

MaterialPlayArrowSharp.propTypes = { ...Icon.propTypes }

export default MaterialPlayArrowSharp
