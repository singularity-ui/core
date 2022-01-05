import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import type { ForwardedRef, HTMLAttributes, ReactElement } from 'react'

const StyleItem = styled.li`
  display: flex;
`

const LinkAsSpan = styled.span<{
  isActive: boolean
  isDark: boolean
}>`
  background-color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.isActive ? (p.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)') : 'transparent'};
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  color: ${p => (p.isDark ? p.theme.color.body.white : p.theme.color.body.dark)};
  cursor: ${p => (p.isActive ? 'default' : 'pointer')};
  font-family: inherit;
  font-size: ${p => Math.round(p.theme.typography.size.medium * 100)}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.button.medium};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }

  :hover:not(:disabled) {
    background-color: ${p =>
      // eslint-disable-next-line no-nested-ternary
      p.isActive
        ? p.isDark
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)'
        : p.isDark
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.05)'};
  }
`

const LinkAsAnchor = styled.a<{
  isActive: boolean
  isDark: boolean
}>`
  background-color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.isActive ? (p.isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)') : 'transparent'};
  border-radius: ${p => p.theme.appearance.borderRadius.medium};
  color: white;
  font-family: inherit;
  font-size: ${p => Math.round(p.theme.typography.size.medium * 100)}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.button.medium};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  :focus-visible {
    background-color: ${p => p.theme.color.a11n.focus.background} !important;
  }

  :hover:not(:disabled) {
    background-color: ${p => p.theme.color.primary.active};
  }
`

type VerticalMenuItemCustomProps = {
  accent?: Common.Accent
  href?: string
  isActive?: boolean
  isDark?: boolean
}
export type VerticalMenuItemWithLinkProps = HTMLAttributes<Omit<HTMLAnchorElement, 'href'>> &
  VerticalMenuItemCustomProps & {
    href: string
  }
export type VerticalMenuItemWithSpanProps = HTMLAttributes<HTMLSpanElement> & VerticalMenuItemCustomProps
function ItemWithRef(
  props: VerticalMenuItemWithLinkProps,
  ref: ForwardedRef<Omit<HTMLAnchorElement, 'href'>>,
): ReactElement
function ItemWithRef(props: VerticalMenuItemWithSpanProps, ref: ForwardedRef<HTMLSpanElement>): ReactElement
function ItemWithRef(
  {
    children,
    className,
    href,
    isActive = false,
    isDark = false,
    ...props
  }: VerticalMenuItemWithLinkProps | VerticalMenuItemWithSpanProps,
  ref: ForwardedRef<any>,
) {
  if (href !== undefined) {
    return (
      <StyleItem className={className}>
        <LinkAsAnchor ref={ref} className="Link" href={href} isActive={isActive} isDark={isDark} {...props}>
          {children}
        </LinkAsAnchor>
      </StyleItem>
    )
  }

  return (
    <StyleItem>
      <LinkAsSpan ref={ref} className="Link" isActive={isActive} isDark={isDark} {...props}>
        {children}
      </LinkAsSpan>
    </StyleItem>
  )
}

export const Item = React.forwardRef(ItemWithRef)

Item.displayName = 'Item'

Item.propTypes = {
  href: BetterPropTypes.string.isOptionalButNotNull,
  isActive: BetterPropTypes.bool.isOptionalButNotNull,
  isDark: BetterPropTypes.bool.isOptionalButNotNull,
}
