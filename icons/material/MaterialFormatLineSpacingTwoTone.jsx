import React from 'react'

import Icon from '../Icon'

const MaterialFormatLineSpacingTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z" />
  </svg>
)

const MaterialFormatLineSpacingTwoTone = props => <Icon as={MaterialFormatLineSpacingTwoToneSvg} {...props} />

MaterialFormatLineSpacingTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFormatLineSpacingTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFormatLineSpacingTwoTone
