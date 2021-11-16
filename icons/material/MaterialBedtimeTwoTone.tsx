import React from 'react'

import Icon from '../Icon'

const MaterialBedtimeTwoToneSvg = props => (
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
    </g>
    <g>
      <g>
        <g opacity=".3">
          <path d="M9.27,4.49C6.2,5.6,4,8.55,4,12c0,4.41,3.59,8,8,8c1.81,0,3.54-0.62,4.93-1.71C13.02,16.9,7.64,12.03,9.27,4.49z" />
        </g>
        <path d="M12.34,2.02c-0.12,0-0.23-0.01-0.35-0.01C6.4,2.01,2,6.54,2,12c0,5.52,4.48,10,10,10c3.71,0,6.93-2.02,8.66-5.02 C13.15,16.73,8.57,8.55,12.34,2.02z M12,20c-4.41,0-8-3.59-8-8c0-3.45,2.2-6.4,5.27-7.51c-1.63,7.54,3.75,12.41,7.66,13.8 C15.54,19.38,13.81,20,12,20z" />
      </g>
    </g>
  </svg>
)

const MaterialBedtimeTwoTone = props => <Icon as={MaterialBedtimeTwoToneSvg} {...props} />

MaterialBedtimeTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialBedtimeTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialBedtimeTwoTone