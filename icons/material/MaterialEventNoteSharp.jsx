import React from 'react'

import Icon from '../Icon'

const MaterialEventNoteSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 10H7v2h10v-2zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zm-5-5H7v2h7v-2z" />
  </svg>
)

const MaterialEventNoteSharp = props => <Icon as={MaterialEventNoteSharpSvg} {...props} />

MaterialEventNoteSharp.defaultProps = { ...Icon.defaultProps }

MaterialEventNoteSharp.propTypes = { ...Icon.propTypes }

export default MaterialEventNoteSharp
