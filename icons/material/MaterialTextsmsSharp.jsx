import React from 'react'

import Icon from '../Icon'

const MaterialTextsmsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 2H2.01L2 22l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
  </svg>
)

const MaterialTextsmsSharp = props => <Icon as={MaterialTextsmsSharpSvg} {...props} />

MaterialTextsmsSharp.defaultProps = { ...Icon.defaultProps }

MaterialTextsmsSharp.propTypes = { ...Icon.propTypes }

export default MaterialTextsmsSharp