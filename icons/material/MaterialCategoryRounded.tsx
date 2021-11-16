import React from 'react'

import Icon from '../Icon'

const MaterialCategoryRoundedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.15 3.4L7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4c-.39-.64-1.31-.64-1.7 0z" />
    <circle cx="17.5" cy="17.5" r="4.5" />
    <path d="M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1z" />
  </svg>
)

const MaterialCategoryRounded = props => <Icon as={MaterialCategoryRoundedSvg} {...props} />

MaterialCategoryRounded.defaultProps = { ...Icon.defaultProps }

MaterialCategoryRounded.propTypes = { ...Icon.propTypes }

export default MaterialCategoryRounded