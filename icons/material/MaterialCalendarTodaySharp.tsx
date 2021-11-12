import React from 'react'

import Icon from '../Icon'

const MaterialCalendarTodaySharpSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z" />
  </svg>
)

const MaterialCalendarTodaySharp = props => <Icon as={MaterialCalendarTodaySharpSvg} {...props} />

MaterialCalendarTodaySharp.defaultProps = { ...Icon.defaultProps }

MaterialCalendarTodaySharp.propTypes = { ...Icon.propTypes }

export default MaterialCalendarTodaySharp
