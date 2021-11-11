import React from 'react'

import Icon from '../Icon'

const MaterialLibraryAddCheckOutlinedSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M20,4v12H8V4H20 M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2L20,2z M12.47,14 L9,10.5l1.4-1.41l2.07,2.08L17.6,6L19,7.41L12.47,14z M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
  </svg>
)

const MaterialLibraryAddCheckOutlined = props => <Icon as={MaterialLibraryAddCheckOutlinedSvg} {...props} />

MaterialLibraryAddCheckOutlined.defaultProps = { ...Icon.defaultProps }

MaterialLibraryAddCheckOutlined.propTypes = { ...Icon.propTypes }

export default MaterialLibraryAddCheckOutlined