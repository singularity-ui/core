import React from 'react'

import Icon from '../Icon'

const MaterialShortTextSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <g>
          <path d="M4,9h16v2H4V9z M4,13h10v2H4V13z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialShortText = props => <Icon as={MaterialShortTextSvg} {...props} />

MaterialShortText.defaultProps = { ...Icon.defaultProps }

MaterialShortText.propTypes = { ...Icon.propTypes }

export default MaterialShortText
