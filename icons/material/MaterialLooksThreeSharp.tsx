import React from 'react'

import Icon from '../Icon'

const MaterialLooksThreeSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3H3.01v18H21V3zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01v10z" />
  </svg>
)

const MaterialLooksThreeSharp = props => <Icon as={MaterialLooksThreeSharpSvg} {...props} />

MaterialLooksThreeSharp.defaultProps = { ...Icon.defaultProps }

MaterialLooksThreeSharp.propTypes = { ...Icon.propTypes }

export default MaterialLooksThreeSharp
