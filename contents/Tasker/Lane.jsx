import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: white;
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.small};
  padding: ${p => p.theme.padding.layout.small} ${p => p.theme.padding.layout.medium};
`

const Label = styled.h3`
  font-weight: 500;
  margin-bottom: ${p => p.theme.padding.layout.small};
`

const Lane = ({ label, tasks }) => (
  <Box>
    <Label>{label}</Label>
    {tasks.map((Task, index) => (
      <Task key={String(index)} />
    ))}
  </Box>
)

Lane.propTypes = {
  label: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.elementType).isRequired,
}

export default Lane
