import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { TYPE, TYPES } from '../../common/constants'

const StyledTh = styled.th`
  border-bottom: solid 2px ${p => p.theme.color.body.light};
  font-weight: 500;
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
`

const Head = ({ label, type }, index) => {
  const key = String(index)

  if (type === TYPE.ACTION) {
    return <StyledTh key={key} as="td" />
  }

  return <StyledTh key={key}>{label}</StyledTh>
}

Head.defaultProps = {
  type: TYPE.STRING,
}

Head.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(TYPES),
}

export default Head
