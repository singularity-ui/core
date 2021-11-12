import React from 'react'

import Icon from '../Icon'

const MaterialHourglassFullSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" />
  </svg>
)

const MaterialHourglassFull = props => <Icon as={MaterialHourglassFullSvg} {...props} />

MaterialHourglassFull.defaultProps = { ...Icon.defaultProps }

MaterialHourglassFull.propTypes = { ...Icon.propTypes }

export default MaterialHourglassFull
