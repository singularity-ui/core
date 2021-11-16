import React from 'react'

import Icon from '../Icon'

const MaterialFileCopyTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
  </svg>
)

const MaterialFileCopyTwoTone = props => <Icon as={MaterialFileCopyTwoToneSvg} {...props} />

MaterialFileCopyTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialFileCopyTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialFileCopyTwoTone