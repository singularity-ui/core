import React from 'react'

import Icon from '../Icon'

const MaterialHorizontalRuleTwoToneSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" fill-rule="evenodd" height="24" width="24" />
      <g>
        <rect fill-rule="evenodd" height="2" width="16" x="4" y="11" />
      </g>
    </g>
  </svg>
)

const MaterialHorizontalRuleTwoTone = props => <Icon as={MaterialHorizontalRuleTwoToneSvg} {...props} />

MaterialHorizontalRuleTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialHorizontalRuleTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialHorizontalRuleTwoTone
