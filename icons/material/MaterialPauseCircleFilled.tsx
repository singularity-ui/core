import React from 'react'

import Icon from '../Icon'

const MaterialPauseCircleFilledSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
  </svg>
)

const MaterialPauseCircleFilled = props => <Icon as={MaterialPauseCircleFilledSvg} {...props} />

MaterialPauseCircleFilled.defaultProps = { ...Icon.defaultProps }

MaterialPauseCircleFilled.propTypes = { ...Icon.propTypes }

export default MaterialPauseCircleFilled
