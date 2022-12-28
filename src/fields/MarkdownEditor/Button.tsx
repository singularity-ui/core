import { styled } from 'styled-components'

import type { ButtonHTMLAttributes } from 'react'

const StyledButton = styled.button<{
  isActive: boolean
  isDisabled: boolean
}>`
  background-color: transparent;
  border: 0;
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
  line-height: 0.625;
  margin: 0 ${p => p.theme.padding.layout.tiny} 0 0;
  opacity: ${p => (p.isDisabled ? 0.35 : 1)};
  padding: 1px 0 0 0;
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }

  > svg {
    fill: ${p => p.theme.color.body.dark};
    height: 1rem;
    opacity: ${p => (p.isActive ? 1 : 0.35)};
  }
  :hover > svg {
    opacity: ${p => (p.isActive ? 1 : 0.65)};
  }
`

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
  isDisabled?: boolean
}
export function Button({ children, isActive = false, isDisabled = false, ...props }: ButtonProps) {
  return (
    <StyledButton isActive={isActive} isDisabled={isDisabled} type="button" {...props}>
      {children}
    </StyledButton>
  )
}
