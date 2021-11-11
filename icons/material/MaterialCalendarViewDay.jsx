import React from 'react'

import Icon from '../Icon'

const MaterialCalendarViewDaySvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
  </svg>
)

const MaterialCalendarViewDay = props => <Icon as={MaterialCalendarViewDaySvg} {...props} />

MaterialCalendarViewDay.defaultProps = { ...Icon.defaultProps }

MaterialCalendarViewDay.propTypes = { ...Icon.propTypes }

export default MaterialCalendarViewDay
