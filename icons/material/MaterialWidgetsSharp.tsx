import React from 'react'

import Icon from '../Icon'

const MaterialWidgetsSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z" />
  </svg>
)

const MaterialWidgetsSharp = props => <Icon as={MaterialWidgetsSharpSvg} {...props} />

MaterialWidgetsSharp.defaultProps = { ...Icon.defaultProps }

MaterialWidgetsSharp.propTypes = { ...Icon.propTypes }

export default MaterialWidgetsSharp
