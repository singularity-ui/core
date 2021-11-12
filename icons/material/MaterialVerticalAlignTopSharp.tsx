import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignTopSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
  </svg>
)

const MaterialVerticalAlignTopSharp = props => <Icon as={MaterialVerticalAlignTopSharpSvg} {...props} />

MaterialVerticalAlignTopSharp.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignTopSharp.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignTopSharp
