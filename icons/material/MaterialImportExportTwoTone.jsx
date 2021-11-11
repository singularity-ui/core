import React from 'react'

import Icon from '../Icon'

const MaterialImportExportTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5 6.99h3V14h2V6.99h3L9 3zM14 10v7.01h-3L15 21l4-3.99h-3V10z" />
  </svg>
)

const MaterialImportExportTwoTone = props => <Icon as={MaterialImportExportTwoToneSvg} {...props} />

MaterialImportExportTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialImportExportTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialImportExportTwoTone