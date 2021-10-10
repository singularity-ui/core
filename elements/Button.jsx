import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'
import theme from '../common/theme'

const StyledButton = styled.button`
  background-color: ${p => p.theme.color[p.accent].default};
  border: 0;
  color: white;
  cursor: pointer;
  font-family: ${p => p.theme.typography.font.default.family};
  font-size: ${p => p.theme.typography.size[p.size]};
  font-weight: ${p => p.theme.typography.font.default.weight};
  padding: ${p => p.theme.padding.element[p.size]};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  :disabled {
    opacity: 0.65;
  }

  :hover {
    background-color: ${p => p.theme.color[p.accent].active};
  }
`

const Button = React.forwardRef(({ accent, children, size, type, ...props }, ref) => (
  <ThemeProvider theme={theme}>
    <StyledButton ref={ref} accent={accent} className="Button" size={size} type={type} {...props}>
      {children}
    </StyledButton>
  </ThemeProvider>
))

Button.displayName = 'Button'

Button.defaultProps = {
  accent: ACCENT.PRIMARY,
  size: SIZE.MEDIUM,
  type: 'button',
}

Button.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
