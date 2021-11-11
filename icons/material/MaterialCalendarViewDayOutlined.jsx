import React from 'react'

import Icon from '../Icon'

const MaterialCalendarViewDayOutlinedSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z" />
  </svg>
)

const MaterialCalendarViewDayOutlined = props => <Icon as={MaterialCalendarViewDayOutlinedSvg} {...props} />

MaterialCalendarViewDayOutlined.defaultProps = { ...Icon.defaultProps }

MaterialCalendarViewDayOutlined.propTypes = { ...Icon.propTypes }

export default MaterialCalendarViewDayOutlined
