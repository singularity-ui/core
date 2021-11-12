import React from 'react'

import Icon from '../Icon'

const MaterialSubdirectoryArrowRightTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
    <path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
  </svg>
)

const MaterialSubdirectoryArrowRightTwoTone = props => <Icon as={MaterialSubdirectoryArrowRightTwoToneSvg} {...props} />

MaterialSubdirectoryArrowRightTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialSubdirectoryArrowRightTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialSubdirectoryArrowRightTwoTone
