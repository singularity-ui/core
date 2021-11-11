import React from 'react'

import Icon from '../Icon'

const MaterialEqualizerTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z" />
  </svg>
)

const MaterialEqualizerTwoTone = props => <Icon as={MaterialEqualizerTwoToneSvg} {...props} />

MaterialEqualizerTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialEqualizerTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialEqualizerTwoTone
