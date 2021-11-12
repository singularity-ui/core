import React from 'react'

import Icon from '../Icon'

const MaterialBookmarkBorderOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
  </svg>
)

const MaterialBookmarkBorderOutlined = props => <Icon as={MaterialBookmarkBorderOutlinedSvg} {...props} />

MaterialBookmarkBorderOutlined.defaultProps = { ...Icon.defaultProps }

MaterialBookmarkBorderOutlined.propTypes = { ...Icon.propTypes }

export default MaterialBookmarkBorderOutlined
