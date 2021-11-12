import React from 'react'

import Icon from '../Icon'

const MaterialAccountBalanceTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6.29 6l5.21-2.74L16.71 6z" opacity=".3" />
    <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-9L2 6v2h19V6l-9.5-5zM6.29 6l5.21-2.74L16.71 6H6.29z" />
  </svg>
)

const MaterialAccountBalanceTwoTone = props => <Icon as={MaterialAccountBalanceTwoToneSvg} {...props} />

MaterialAccountBalanceTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialAccountBalanceTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialAccountBalanceTwoTone
