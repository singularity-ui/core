import React from 'react'

import Icon from '../Icon'

const MaterialPauseCircleFilledTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <g>
        <path
          d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M11,16H9V8h2V16z M15,16h-2 V8h2V16z"
          opacity=".3"
        />
        <rect height="8" width="2" x="13" y="8" />
        <rect height="8" width="2" x="9" y="8" />
        <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z" />
      </g>
    </g>
  </svg>
)

const MaterialPauseCircleFilledTwoTone = props => <Icon as={MaterialPauseCircleFilledTwoToneSvg} {...props} />

MaterialPauseCircleFilledTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialPauseCircleFilledTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialPauseCircleFilledTwoTone