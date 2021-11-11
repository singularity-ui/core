import React from 'react'

import Icon from '../Icon'

const MaterialCompareArrowsSvg = props => (
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
          <path d="M9.01,14H2v2h7.01v3L13,15l-3.99-4V14z M14.99,13v-3H22V8h-7.01V5L11,9L14.99,13z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialCompareArrows = props => <Icon as={MaterialCompareArrowsSvg} {...props} />

MaterialCompareArrows.defaultProps = { ...Icon.defaultProps }

MaterialCompareArrows.propTypes = { ...Icon.propTypes }

export default MaterialCompareArrows