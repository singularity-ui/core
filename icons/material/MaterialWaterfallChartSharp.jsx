import React from 'react'

import Icon from '../Icon'

const MaterialWaterfallChartSharpSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M18,4h3v16h-3V4z M3,13h3v7H3V13z M14,4h3v3h-3V4z M10,5h3v4h-3V5z M7,10h3v4H7V10z" />
      </g>
    </g>
  </svg>
)

const MaterialWaterfallChartSharp = props => <Icon as={MaterialWaterfallChartSharpSvg} {...props} />

MaterialWaterfallChartSharp.defaultProps = { ...Icon.defaultProps }

MaterialWaterfallChartSharp.propTypes = { ...Icon.propTypes }

export default MaterialWaterfallChartSharp