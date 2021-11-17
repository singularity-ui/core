/* eslint-disable react/require-default-props */

import PropTypes from 'prop-types'
import React, { ButtonHTMLAttributes, ForwardRefExoticComponent, FunctionComponent } from 'react'
import styled from 'styled-components'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'

const StyledButton = styled.button<{
  accent: 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  size: 'large' | 'medium' | 'small'
}>`
  background-color: ${p => p.theme.color[p.accent].default};
  border: solid 1px ${p => p.theme.color[p.accent].default};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 100)}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.button[p.size]};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  :disabled {
    opacity: 0.65;
  }

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }

  :hover {
    background-color: ${p => p.theme.color[p.accent].active};
  }
`

type ButtonProps = ButtonHTMLAttributes<any> & {
  accent?: 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  children: any
  size?: 'large' | 'medium' | 'small'
  type?: 'button' | 'submit' | 'reset'
}
export const ButtonWithoutRef: FunctionComponent<ButtonProps> = (
  { accent = ACCENT.PRIMARY, children, size = SIZE.MEDIUM, type = 'button', ...props }: ButtonProps,
  ref,
) => (
  <StyledButton ref={ref} accent={accent} size={size} type={type} {...props}>
    {children}
  </StyledButton>
)

ButtonWithoutRef.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export const Button: ForwardRefExoticComponent<ButtonProps> = React.forwardRef(ButtonWithoutRef as any)

Button.displayName = 'Button'
