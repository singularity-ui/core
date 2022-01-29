import styled from 'styled-components'

import { getLowestFontSize } from '../helpers/getLowestFontSize'

export const Error = styled.p<{
  size: Common.Size
}>`
  color: ${p => p.theme.color.danger.default};
  font-size: ${p => getLowestFontSize(p.theme, p.size)};
  font-weight: 500;
  margin: 0 !important;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

export const Helper = styled.p<{
  size: Common.Size
}>`
  color: ${p => p.theme.color.body.light};
  font-size: ${p => getLowestFontSize(p.theme, p.size)};
  font-style: italic;
  margin: 0 !important;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

export const Label = styled.label<{
  size: Common.Size
}>`
  display: block;
  font-size: ${p => getLowestFontSize(p.theme, p.size)};
  font-weight: 500;
  padding: 0 0 ${p => p.theme.padding.layout.tiny} 0;
  text-transform: uppercase;
`
