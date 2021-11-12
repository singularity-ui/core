import React from 'react'

import Icon from '../Icon'

const MaterialDragHandleSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
)

const MaterialDragHandleSharp = props => <Icon as={MaterialDragHandleSharpSvg} {...props} />

MaterialDragHandleSharp.defaultProps = { ...Icon.defaultProps }

MaterialDragHandleSharp.propTypes = { ...Icon.propTypes }

export default MaterialDragHandleSharp
