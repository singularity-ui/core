import React from 'react'

import Icon from '../Icon'

const MaterialMedicationSharpSvg = props => (
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
        <rect height="2" width="12" x="6" y="3" />
        <path d="M19,6H5v15h14V6z M16,15h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16V15z" />
      </g>
    </g>
  </svg>
)

const MaterialMedicationSharp = props => <Icon as={MaterialMedicationSharpSvg} {...props} />

MaterialMedicationSharp.defaultProps = { ...Icon.defaultProps }

MaterialMedicationSharp.propTypes = { ...Icon.propTypes }

export default MaterialMedicationSharp