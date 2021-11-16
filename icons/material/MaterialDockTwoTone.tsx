import React from 'react'

import Icon from '../Icon'

const MaterialDockTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8 5h8v10H8z" opacity=".3" />
    <path d="M8 21h8v2H8zm8-19.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z" />
  </svg>
)

const MaterialDockTwoTone = props => <Icon as={MaterialDockTwoToneSvg} {...props} />

MaterialDockTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialDockTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialDockTwoTone