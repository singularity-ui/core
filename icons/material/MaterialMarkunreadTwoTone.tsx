import React from 'react'

import Icon from '../Icon'

const MaterialMarkunreadTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6H4l8 5zM4 8v10h16V8l-8 5z" opacity=".3" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
)

const MaterialMarkunreadTwoTone = props => <Icon as={MaterialMarkunreadTwoToneSvg} {...props} />

MaterialMarkunreadTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialMarkunreadTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialMarkunreadTwoTone