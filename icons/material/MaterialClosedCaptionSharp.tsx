import React from 'react'

import Icon from '../Icon'

const MaterialClosedCaptionSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 4H3v16h18V4zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5v2zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5v2z" />
  </svg>
)

const MaterialClosedCaptionSharp = props => <Icon as={MaterialClosedCaptionSharpSvg} {...props} />

MaterialClosedCaptionSharp.defaultProps = { ...Icon.defaultProps }

MaterialClosedCaptionSharp.propTypes = { ...Icon.propTypes }

export default MaterialClosedCaptionSharp
