import React from 'react'

import Icon from '../Icon'

const MaterialDragHandleSvg = props => (
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
        <g>
          <path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" />
        </g>
      </g>
    </g>
  </svg>
)

const MaterialDragHandle = props => <Icon as={MaterialDragHandleSvg} {...props} />

MaterialDragHandle.defaultProps = { ...Icon.defaultProps }

MaterialDragHandle.propTypes = { ...Icon.propTypes }

export default MaterialDragHandle