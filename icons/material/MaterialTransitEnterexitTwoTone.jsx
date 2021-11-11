import React from 'react'

import Icon from '../Icon'

const MaterialTransitEnterexitTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z" />
  </svg>
)

const MaterialTransitEnterexitTwoTone = props => <Icon as={MaterialTransitEnterexitTwoToneSvg} {...props} />

MaterialTransitEnterexitTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialTransitEnterexitTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialTransitEnterexitTwoTone
