import React from 'react'

import Icon from '../Icon'

const MaterialCalendarViewDaySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z" />
  </svg>
)

const MaterialCalendarViewDaySharp = props => <Icon as={MaterialCalendarViewDaySharpSvg} {...props} />

MaterialCalendarViewDaySharp.defaultProps = { ...Icon.defaultProps }

MaterialCalendarViewDaySharp.propTypes = { ...Icon.propTypes }

export default MaterialCalendarViewDaySharp
