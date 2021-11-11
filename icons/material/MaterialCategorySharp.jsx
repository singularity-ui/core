import React from 'react'

import Icon from '../Icon'

const MaterialCategorySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2l-5.5 9h11z" />
    <circle cx="17.5" cy="17.5" r="4.5" />
    <path d="M3 13.5h8v8H3z" />
  </svg>
)

const MaterialCategorySharp = props => <Icon as={MaterialCategorySharpSvg} {...props} />

MaterialCategorySharp.defaultProps = { ...Icon.defaultProps }

MaterialCategorySharp.propTypes = { ...Icon.propTypes }

export default MaterialCategorySharp
