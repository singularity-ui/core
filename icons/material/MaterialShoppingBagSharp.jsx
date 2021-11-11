import React from 'react'

import Icon from '../Icon'

const MaterialShoppingBagSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M20,6h-4c0-2.21-1.79-4-4-4S8,3.79,8,6H4v16h16V6z M10,11H8V8h2V11z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,11 h-2V8h2V11z" />
    </g>
  </svg>
)

const MaterialShoppingBagSharp = props => <Icon as={MaterialShoppingBagSharpSvg} {...props} />

MaterialShoppingBagSharp.defaultProps = { ...Icon.defaultProps }

MaterialShoppingBagSharp.propTypes = { ...Icon.propTypes }

export default MaterialShoppingBagSharp
