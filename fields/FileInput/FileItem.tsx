/* eslint-disable react/require-default-props */

import BetterPropTypes from 'better-prop-types'
import React from 'react'
import styled from 'styled-components'

import { SIZES } from '../../common/constants'
import MaterialExtension from '../../icons/material/MaterialExtension'
import MaterialPictureAsPdf from '../../icons/material/MaterialPictureAsPdf'

import type { DOMAttributes, FunctionComponent } from 'react'

const Box = styled.div<{
  size: Common.Size
}>`
  display: flex;
  margin: ${p => p.theme.padding.layout[p.size]} 0 0 0;
`

const IconBox = styled.div<{
  size: Common.Size
}>`
  align-items: center;
  // border: solid 2px ${p => p.theme.color.secondary.default};
  background-color: ${p => p.theme.color.secondary.background};
  border-radius: ${p => p.theme.appearance.borderRadius[p.size]};
  display: flex;
  justify-content: center;
  margin: 0 ${p => p.theme.padding.layout[p.size]} 0 0;
  padding: ${p => p.theme.padding.input[p.size]};

  > svg {
    fill: ${p => p.theme.color.secondary.default};
    height: ${p => Math.round(p.theme.typography.size[p.size] * 1.5)}rem;
    width: ${p => Math.round(p.theme.typography.size[p.size] * 1.5)}rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-width: 0;
`

const Name = styled.p<{
  size: Common.Size
}>`
  font-size: ${p => Math.round(p.theme.typography.size[p.size] * 80)}%;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
`

const FILE_MIME_PROPS: Record<
  string,
  {
    Icon: any
  }
> = {
  'application/pdf': {
    Icon: MaterialPictureAsPdf,
  },
}

type FileItemProps = DOMAttributes<HTMLDivElement> & {
  file: File
  size: Common.Size
}
export const FileItem: FunctionComponent<FileItemProps> = ({ file, size }) => {
  const maybeSupportedMime = FILE_MIME_PROPS[file.type]
  const Icon = maybeSupportedMime !== undefined ? maybeSupportedMime.Icon : MaterialExtension

  return (
    <Box size={size}>
      <IconBox size={size}>
        <Icon />
      </IconBox>

      <Info>
        <Name size={size}>{file.name}</Name>
      </Info>
    </Box>
  )
}

FileItem.propTypes = {
  file: BetterPropTypes.exact({
    arrayBuffer: BetterPropTypes.func.isRequired,
    lastModified: BetterPropTypes.number.isRequired,
    name: BetterPropTypes.string.isRequired,
    size: BetterPropTypes.number.isRequired,
    slice: BetterPropTypes.func.isRequired,
    stream: BetterPropTypes.func.isRequired,
    text: BetterPropTypes.func.isRequired,
    type: BetterPropTypes.string.isRequired,
    webkitRelativePath: BetterPropTypes.string.isRequired,
  }).isRequired,
  size: BetterPropTypes.oneOf(SIZES).isRequired,
}
