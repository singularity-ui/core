import BetterPropTypes from 'better-prop-types'
import React, { ForwardRefRenderFunction, InputHTMLAttributes, ReactEventHandler } from 'react'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'
import MaterialUploadFile from '../icons/material/MaterialUploadFile'

const Label = styled.label<{
  size: Common.Size
}>`
  display: block;
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 80)}%;
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
`

const FileBox = styled.div<{
  size: Common.Size
}>`
  align-items: center;
  background-color: ${p => p.theme.color.body.white};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${p => Math.round(p.theme.typography.size[p.size] * 8)}rem;
  justify-content: center;
  position: relative;

  ::after {
    border-bottom: 1rem solid ${p => p.theme.color.body.light};
    border-right: 1rem solid transparent;
    content: '';
    height: 0;
    opacity: 0.65;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
  }
  :hover::after {
    opacity: 1;
  }

  ::before {
    border-left: 1rem solid transparent;
    border-top: 1rem solid ${p => p.theme.color.body.background};
    content: '';
    height: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
  }

  * {
    cursor: pointer;
  }

  > svg {
    fill: ${p => p.theme.color.body.light};
    height: ${p => Math.round(p.theme.typography.size[p.size] * 2)}rem;
    width: ${p => Math.round(p.theme.typography.size[p.size] * 2)}rem;
    opacity: 0.65;
  }
  :hover > svg {
    opacity: 1;
  }
`

const StyledInput = styled.input<{
  _size: Common.Size
  hasError: boolean
}>`
  height: 1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  z-index: -1;
`

const Placeholder = styled.div<{
  isFilled: boolean
  size: Common.Size
}>`
  color: ${p => (p.isFilled ? p.theme.color.body.main : p.theme.color.body.light)};
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 100)}%;
  font-weight: 500;
  opacity: ${p => (p.isFilled ? 1 : 0.65)};
  padding: ${p => p.theme.padding.input[p.size]} 0 0 0;
`

const Helper = styled.p`
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

const Error = styled.p`
  color: ${p => p.theme.color.danger.default};
  font-weight: 500;
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

type FileInputProps = Omit<InputHTMLAttributes<any>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label?: string
  size?: Common.Size
}
const FileInputWithRef: ForwardRefRenderFunction<HTMLInputElement, FileInputProps> = (
  { className, error, helper, label, onChange, placeholder, size = SIZE.MEDIUM, ...props },
  ref,
) => {
  const $input = React.useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = React.useState(null)

  const hasError = typeof error === 'string' && error.length > 0

  React.useImperativeHandle(ref, () => $input.current as HTMLInputElement)

  const handleChange: ReactEventHandler<HTMLInputElement> = event => {
    const [file] = (event.target as any).files

    setFileName(file.name)

    if (onChange !== undefined) {
      onChange(event)
    }
  }

  const triggerClickOnFileInput: ReactEventHandler<HTMLDivElement> = () => {
    if ($input.current === null) {
      return
    }

    $input.current.click()
  }

  return (
    <div className={className}>
      {label && (
        <Label className="Label" size={size}>
          {label}
        </Label>
      )}

      <FileBox onClick={triggerClickOnFileInput} size={size}>
        <StyledInput
          ref={$input}
          _size={size}
          className="TextInput"
          hasError={hasError}
          onChange={handleChange}
          type="file"
          {...props}
        />

        <MaterialUploadFile />
        <Placeholder className="Label" isFilled={Boolean(fileName)} size={size}>
          {fileName || placeholder}
        </Placeholder>
      </FileBox>

      {!error && helper && <Helper className="Helper">{helper}</Helper>}

      {error && <Error className="Error">{error}</Error>}
    </div>
  )
}

export const FileInput = React.forwardRef(FileInputWithRef)

FileInput.displayName = 'FileInput'

FileInput.propTypes = {
  error: BetterPropTypes.string.isOptionalButNotNull,
  helper: BetterPropTypes.string.isOptionalButNotNull,
  label: BetterPropTypes.string.isOptionalButNotNull,
  size: BetterPropTypes.oneOf(SIZES).isOptionalButNotNull,
}
