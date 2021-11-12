import React from 'react'

import Icon from '../Icon'

const MaterialFilterOneSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 5H1v18h18v-2H3V5zm11 10h2V5h-4v2h2v8zm9-14H5v18h18V1zm-2 16H7V3h14v14z" />
  </svg>
)

const MaterialFilterOneSharp = props => <Icon as={MaterialFilterOneSharpSvg} {...props} />

MaterialFilterOneSharp.defaultProps = { ...Icon.defaultProps }

MaterialFilterOneSharp.propTypes = { ...Icon.propTypes }

export default MaterialFilterOneSharp
