import React from 'react'

import Icon from '../Icon'

const MaterialNotesOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" />
  </svg>
)

const MaterialNotesOutlined = props => <Icon as={MaterialNotesOutlinedSvg} {...props} />

MaterialNotesOutlined.defaultProps = { ...Icon.defaultProps }

MaterialNotesOutlined.propTypes = { ...Icon.propTypes }

export default MaterialNotesOutlined
