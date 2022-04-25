import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'
import { Error, Helper, Label } from './shared'

import type { ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react'

const StyledTextarea = styled.textarea<{
  hasError: boolean
  isAutoResizing: boolean
  size: Common.Size
}>`
  background-color: ${p => p.theme.color.body.white};
  border: solid 1px ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  font-family: inherit;
  font-size: ${p => p.theme.typography.size[p.size] * 100}%;
  font-weight: 400;
  padding: ${p => p.theme.padding.input[p.size]};
  resize: ${p => (p.isAutoResizing ? 'none' : 'both')};
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  :focus {
    box-shadow: 0 0 0 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }

  :hover {
    border: solid 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }
`

type TextareaMeasurement = {
  borderHeight: number
  lineHeight: number
  paddingHeight: number
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  error?: string
  helper?: string
  isAutoResizing?: boolean
  label?: string
  size?: Common.Size
}
const TextareaWithRef: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { isAutoResizing = false, className, error, helper, label, onInput, size = SIZE.MEDIUM, ...props },
  ref,
) => {
  const $textarea = React.useRef<HTMLTextAreaElement>(null)
  const $textareaMeasurement = React.useRef<TextareaMeasurement>()
  const [hasRenderedOnce, setHasRenderedOnce] = React.useState(false)

  const hasError = typeof error === 'string' && error.length > 0
  const id = props.id || props.name

  const resizeToFit = () => {
    if ($textarea.current === null || $textareaMeasurement.current === undefined) {
      return
    }

    $textarea.current.style.height = `inherit`

    const { clientHeight, scrollHeight } = $textarea.current

    if (scrollHeight !== clientHeight) {
      $textarea.current.style.height = `${scrollHeight + $textareaMeasurement.current.borderHeight}px`
    }
  }
  const controlInput = isAutoResizing ? resizeToFit : onInput

  React.useImperativeHandle(ref, () => $textarea.current as HTMLTextAreaElement)

  React.useEffect(() => {
    if (!isAutoResizing) {
      return
    }

    if (!hasRenderedOnce) {
      setHasRenderedOnce(true)

      return
    }

    if ($textareaMeasurement.current === undefined && $textarea.current !== null) {
      const computedStyle = window.getComputedStyle($textarea.current)

      const borderHeight = parseInt(computedStyle.borderTopWidth, 10) + parseInt(computedStyle.borderBottomWidth, 10)
      const lineHeight = parseInt(
        computedStyle.lineHeight === 'normal'
          ? window.getComputedStyle(window.document.body).lineHeight
          : computedStyle.lineHeight,
        10,
      )
      const paddingHeight = parseInt(computedStyle.paddingTop, 10) + parseInt(computedStyle.paddingBottom, 10)

      $textareaMeasurement.current = {
        borderHeight,
        lineHeight,
        paddingHeight,
      }
    }

    resizeToFit()
  }, [hasRenderedOnce, props.defaultValue])

  return (
    <div className={className}>
      {label && (
        <Label className="Label" htmlFor={id} size={size}>
          {label}
        </Label>
      )}

      <StyledTextarea
        ref={$textarea}
        className="Textarea"
        hasError={hasError}
        id={id}
        isAutoResizing={isAutoResizing}
        onInput={controlInput}
        size={size}
        {...props}
      />

      {!error && helper && (
        <Helper className="Helper" size={size}>
          {helper}
        </Helper>
      )}

      {error && (
        <Error className="Error" size={size}>
          {error}
        </Error>
      )}
    </div>
  )
}

export const Textarea = React.forwardRef(TextareaWithRef)

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  isAutoResizing: BetterPropTypes.bool.isOptionalButNotNull,
  label: BetterPropTypes.string.isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}
