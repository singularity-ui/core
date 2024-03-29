import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import styled from 'styled-components'

import { SIZE } from '../../common/constants'
import { MaterialUploadFile } from '../../icons/material/MaterialUploadFile'
import { Error, Helper, Label } from '../shared'
import { FileItem } from './FileItem'

import type { DragEventHandler, ForwardedRef, InputHTMLAttributes, ReactEventHandler } from 'react'

const FileBox = styled.div<{
  hasError: boolean
  isHovered: boolean
  size: Common.Size
}>`
  background-color: ${p => p.theme.color.body.white};
  border: dashed 1px
    ${p => {
      if (p.isHovered) {
        return p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active
      }

      return p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default
    }};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  box-shadow: ${p =>
    ['0 0 0', p.isHovered ? '1px' : 0, p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active].join(
      ' ',
    )};
  cursor: pointer;
  display: flex;
  flex-direction: column;

  :hover {
    border: dashed 1px ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }

  * {
    cursor: pointer;
    pointer-events: none;
  }

  :hover svg {
    opacity: 1;
  }
`

const FileInputBox = styled.div<{
  hasFiles: boolean
  size: Common.Size
}>`
  align-items: center;
  border-bottom: solid ${p => (p.hasFiles ? '2px' : 0)} ${p => p.theme.color.secondary.background};
  display: flex;
  flex-direction: column;
  height: ${p => Math.round(p.theme.typography.size[p.size] * 8)}rem;
  justify-content: center;
  position: relative;

  > svg {
    fill: ${p => p.theme.color.body.light};
    height: ${p => Math.round(p.theme.typography.size[p.size] * 2)}rem;
    width: ${p => Math.round(p.theme.typography.size[p.size] * 2)}rem;
    opacity: 0.65;
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
  size: Common.Size
}>`
  color: ${p => p.theme.color.body.light};
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 100)}%;
  font-weight: 500;
  opacity: 0.65;
  padding: ${p => p.theme.padding.input[p.size]} 0 0 0;
`

const FileList = styled.div<{
  size: Common.Size
}>`
  display: flex;
  padding: 0 ${p => p.theme.padding.layout[p.size]} ${p => p.theme.padding.layout[p.size]};
  flex-direction: column;
`

export type FileInputProps = Omit<InputHTMLAttributes<any>, 'size'> & {
  className?: string
  error?: string
  helper?: string
  label?: string
  size?: Common.Size
}
function FileInputWithRef(
  { className, error, helper, label, onChange, placeholder, size = SIZE.MEDIUM, ...props }: FileInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const $input = useRef<HTMLInputElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const hasError = typeof error === 'string' && error.length > 0
  const hasFiles = files.length > 0
  const id = props.id || props.name

  useImperativeHandle(ref, () => $input.current as HTMLInputElement)

  const handleChange: ReactEventHandler<HTMLInputElement> = event => {
    if (event.currentTarget.files === null) {
      return
    }

    setFiles([...event.currentTarget.files])

    if (onChange !== undefined) {
      onChange(event)
    }
  }

  const handleDragOver: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleDragEnter: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()

    if (event.dataTransfer.items.length > 0) {
      setIsHovered(true)
    }
  }

  const handleDragLeave: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()

    setIsHovered(false)
  }

  const handleDrop: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    event.stopPropagation()

    if ($input.current === null) {
      return
    }

    $input.current.files = event.dataTransfer.files
    $input.current.dispatchEvent(
      new Event('change', {
        bubbles: true,
      }),
    )

    setFiles([...event.dataTransfer.files])
    setIsHovered(false)
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
        <Label className="Label" htmlFor={id} size={size}>
          {label}
        </Label>
      )}

      <FileBox
        hasError={hasError}
        isHovered={isHovered}
        onClick={triggerClickOnFileInput}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        size={size}
      >
        <FileInputBox hasFiles={hasFiles} size={size}>
          <StyledInput
            ref={$input}
            _size={size}
            className="TextInput"
            hasError={hasError}
            id={id}
            onChange={handleChange}
            type="file"
            {...props}
          />

          <MaterialUploadFile />
          <Placeholder className="Label" size={size}>
            {placeholder}
          </Placeholder>
        </FileInputBox>

        {hasFiles && (
          <FileList size={size}>
            {files.map(file => (
              <FileItem key={`${file.name}-${file.size}`} file={file} size={size} />
            ))}
          </FileList>
        )}
      </FileBox>

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

FileInputWithRef.displayName = 'FileInput'

export const FileInput = forwardRef(FileInputWithRef)
