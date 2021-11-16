import React from 'react'

import Icon from '../Icon'

const MaterialCalendarViewMonthSharpSvg = props => (
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
      <path d="M22,4H2v16h20V4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5 h4V18z" />
    </g>
  </svg>
)

const MaterialCalendarViewMonthSharp = props => <Icon as={MaterialCalendarViewMonthSharpSvg} {...props} />

MaterialCalendarViewMonthSharp.defaultProps = { ...Icon.defaultProps }

MaterialCalendarViewMonthSharp.propTypes = { ...Icon.propTypes }

export default MaterialCalendarViewMonthSharp