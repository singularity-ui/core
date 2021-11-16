import React from 'react'

import Icon from '../Icon'

const MaterialSignalWifiFourBarSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" />
  </svg>
)

const MaterialSignalWifiFourBar = props => <Icon as={MaterialSignalWifiFourBarSvg} {...props} />

MaterialSignalWifiFourBar.defaultProps = { ...Icon.defaultProps }

MaterialSignalWifiFourBar.propTypes = { ...Icon.propTypes }

export default MaterialSignalWifiFourBar