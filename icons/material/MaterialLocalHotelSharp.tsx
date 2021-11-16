import React from 'react'

import Icon from '../Icon'

const MaterialLocalHotelSharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm16-6H11v7H3V5H1v15h2v-3h18v3h2V7z" />
  </svg>
)

const MaterialLocalHotelSharp = props => <Icon as={MaterialLocalHotelSharpSvg} {...props} />

MaterialLocalHotelSharp.defaultProps = { ...Icon.defaultProps }

MaterialLocalHotelSharp.propTypes = { ...Icon.propTypes }

export default MaterialLocalHotelSharp