import React from 'react'

import Icon from '../Icon'

const MaterialFileDownloadDoneTwoToneSvg = props => (
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
        <polygon points="20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02" />
        <rect height="2" width="14" x="5" y="18" />
      </g>
    </g>
  </svg>
)

const MaterialFileDownloadDoneTwoTone = props => <Icon as={MaterialFileDownloadDoneTwoToneSvg} {...props} />

MaterialFileDownloadDoneTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFileDownloadDoneTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFileDownloadDoneTwoTone
