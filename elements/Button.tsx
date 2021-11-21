/* eslint-disable react/require-default-props */

import BetterPropTypes from 'better-prop-types'
import React, { ButtonHTMLAttributes, ForwardRefRenderFunction } from 'react'
import styled from 'styled-components'

import { ACCENT, ACCENTS, SIZE, SIZES } from '../common/constants'

const StyledButton = styled.button<{
  accent: Common.Accent
  size: Common.Size
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
  accent?: Common.Accent
  children: any
  size?: Common.Size
  type?: 'button' | 'submit' | 'reset'
}
export const ButtonWithRef: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { accent = ACCENT.PRIMARY, children, size = SIZE.MEDIUM, type = 'button', ...props }: ButtonProps,
  ref,
) => (
  <StyledButton ref={ref} accent={accent} size={size} type={type} {...props}>
    {children}
  </StyledButton>
)

export const Button = React.forwardRef(ButtonWithRef)

Button.displayName = 'Button'

Button.propTypes = {
  accent: BetterPropTypes.oneOf(ACCENTS).isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
  type: BetterPropTypes.oneOf<'button' | 'submit' | 'reset'>(['button', 'submit', 'reset']).isOptionalButNotNull,
}
