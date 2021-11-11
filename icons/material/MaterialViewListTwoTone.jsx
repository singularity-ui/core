import React from 'react'

import Icon from '../Icon'

const MaterialViewListTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path
      d="M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"
      opacity=".3"
    />
    <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z" />
  </svg>
)

const MaterialViewListTwoTone = props => <Icon as={MaterialViewListTwoToneSvg} {...props} />

MaterialViewListTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialViewListTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialViewListTwoTone
