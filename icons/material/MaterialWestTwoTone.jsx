import React from 'react'

import Icon from '../Icon'

const MaterialWestTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z" />
  </svg>
)

const MaterialWestTwoTone = props => <Icon as={MaterialWestTwoToneSvg} {...props} />

MaterialWestTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialWestTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialWestTwoTone
