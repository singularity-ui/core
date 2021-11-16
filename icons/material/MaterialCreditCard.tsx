import React from 'react'

import Icon from '../Icon'

const MaterialCreditCardSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </svg>
)

const MaterialCreditCard = props => <Icon as={MaterialCreditCardSvg} {...props} />

MaterialCreditCard.defaultProps = { ...Icon.defaultProps }

MaterialCreditCard.propTypes = { ...Icon.propTypes }

export default MaterialCreditCard