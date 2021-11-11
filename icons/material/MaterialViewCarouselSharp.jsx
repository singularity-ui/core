import React from 'react'

import Icon from '../Icon'

const MaterialViewCarouselSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z" />
  </svg>
)

const MaterialViewCarouselSharp = props => <Icon as={MaterialViewCarouselSharpSvg} {...props} />

MaterialViewCarouselSharp.defaultProps = { ...Icon.defaultProps }

MaterialViewCarouselSharp.propTypes = { ...Icon.propTypes }

export default MaterialViewCarouselSharp