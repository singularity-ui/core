import React from 'react'

import Icon from '../Icon'

const MaterialVerticalAlignTopTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z" />
  </svg>
)

const MaterialVerticalAlignTopTwoTone = props => <Icon as={MaterialVerticalAlignTopTwoToneSvg} {...props} />

MaterialVerticalAlignTopTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialVerticalAlignTopTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialVerticalAlignTopTwoTone
