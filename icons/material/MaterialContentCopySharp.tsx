import React from 'react'

import Icon from '../Icon'

const MaterialContentCopySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z" />
  </svg>
)

const MaterialContentCopySharp = props => <Icon as={MaterialContentCopySharpSvg} {...props} />

MaterialContentCopySharp.defaultProps = { ...Icon.defaultProps }

MaterialContentCopySharp.propTypes = { ...Icon.propTypes }

export default MaterialContentCopySharp
