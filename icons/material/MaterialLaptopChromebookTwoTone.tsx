import React from 'react'

import Icon from '../Icon'

const MaterialLaptopChromebookTwoToneSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 5h16v10H4z" opacity=".3" />
    <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z" />
  </svg>
)

const MaterialLaptopChromebookTwoTone = props => <Icon as={MaterialLaptopChromebookTwoToneSvg} {...props} />

MaterialLaptopChromebookTwoTone.defaultProps = { ...Icon.defaultProps }

MaterialLaptopChromebookTwoTone.propTypes = { ...Icon.propTypes }

export default MaterialLaptopChromebookTwoTone
