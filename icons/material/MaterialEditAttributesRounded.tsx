import React from 'react'

import Icon from '../Icon'

const MaterialEditAttributesRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm-6.52 3.6L7.6 14.11c-.1.1-.23.15-.35.15s-.26-.05-.35-.15l-1.86-1.86c-.2-.2-.2-.51 0-.71s.51-.2.71 0l1.51 1.51 3.16-3.16c.2-.2.51-.2.71 0s.17.51-.02.71z" />
  </svg>
)

const MaterialEditAttributesRounded = props => <Icon as={MaterialEditAttributesRoundedSvg} {...props} />

MaterialEditAttributesRounded.defaultProps = { ...Icon.defaultProps }

MaterialEditAttributesRounded.propTypes = { ...Icon.propTypes }

export default MaterialEditAttributesRounded