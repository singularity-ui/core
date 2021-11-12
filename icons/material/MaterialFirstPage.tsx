import React from 'react'

import Icon from '../Icon'

const MaterialFirstPageSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" />
    <path d="M24 24H0V0h24v24z" fill="none" />
  </svg>
)

const MaterialFirstPage = props => <Icon as={MaterialFirstPageSvg} {...props} />

MaterialFirstPage.defaultProps = { ...Icon.defaultProps }

MaterialFirstPage.propTypes = { ...Icon.propTypes }

export default MaterialFirstPage
