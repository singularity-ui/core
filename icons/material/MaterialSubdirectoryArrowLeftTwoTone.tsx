import React from 'react'

import Icon from '../Icon'

const MaterialSubdirectoryArrowLeftTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" />
  </svg>
)

const MaterialSubdirectoryArrowLeftTwoTone = props => <Icon as={MaterialSubdirectoryArrowLeftTwoToneSvg} {...props} />

MaterialSubdirectoryArrowLeftTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSubdirectoryArrowLeftTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSubdirectoryArrowLeftTwoTone