import React from 'react'

import Icon from '../Icon'

const MaterialHomeTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
    <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3" />
  </svg>
)

const MaterialHomeTwoTone = props => <Icon as={MaterialHomeTwoToneSvg} {...props} />

MaterialHomeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialHomeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialHomeTwoTone