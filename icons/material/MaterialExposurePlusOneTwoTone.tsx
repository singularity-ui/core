import React from 'react'

import Icon from '../Icon'

const MaterialExposurePlusOneTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 18V5h-.3L15 6.7v1.7l3-1.02V18zm-10-1v-4h4v-2h-4V7H8v4H4v2h4v4z" />
  </svg>
)

const MaterialExposurePlusOneTwoTone = props => <Icon as={MaterialExposurePlusOneTwoToneSvg} {...props} />

MaterialExposurePlusOneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialExposurePlusOneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialExposurePlusOneTwoTone
