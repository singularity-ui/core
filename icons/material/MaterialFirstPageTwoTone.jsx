import React from 'react'

import Icon from '../Icon'

const MaterialFirstPageTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
  </svg>
)

const MaterialFirstPageTwoTone = props => <Icon as={MaterialFirstPageTwoToneSvg} {...props} />

MaterialFirstPageTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFirstPageTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFirstPageTwoTone
