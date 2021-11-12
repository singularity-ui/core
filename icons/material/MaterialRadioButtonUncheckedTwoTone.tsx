import React from 'react'

import Icon from '../Icon'

const MaterialRadioButtonUncheckedTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
)

const MaterialRadioButtonUncheckedTwoTone = props => <Icon as={MaterialRadioButtonUncheckedTwoToneSvg} {...props} />

MaterialRadioButtonUncheckedTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialRadioButtonUncheckedTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialRadioButtonUncheckedTwoTone
