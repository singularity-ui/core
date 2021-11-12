import React from 'react'

import Icon from '../Icon'

const MaterialSchemaSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M14,9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9H14z" />
  </svg>
)

const MaterialSchema = props => <Icon as={MaterialSchemaSvg} {...props} />

MaterialSchema.defaultProps = { ...Icon.defaultProps }

MaterialSchema.propTypes = { ...Icon.propTypes }

export default MaterialSchema
