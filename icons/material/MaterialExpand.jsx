import React from 'react'

import Icon from '../Icon'

const MaterialExpandSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" />
  </svg>
)

const MaterialExpand = props => <Icon as={MaterialExpandSvg} {...props} />

MaterialExpand.defaultProps = { ...Icon.defaultProps }

MaterialExpand.propTypes = { ...Icon.propTypes }

export default MaterialExpand
