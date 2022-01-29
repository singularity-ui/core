import type { Theme } from '../common/theme'

// eslint-disable-next-line @typescript-eslint/naming-convention
const __CACHE: Record<Common.Size, string | null> = {
  large: null,
  medium: null,
  small: null,
}

export function getLowerFontSize(theme: Theme, size: Common.Size): string {
  const lowerFontSize = __CACHE[size]

  if (lowerFontSize !== null) {
    return lowerFontSize
  }

  const newLowerFontSize = `${Math.round(theme.typography.size[size] * 90)}%`
  __CACHE[size] = newLowerFontSize

  return newLowerFontSize
}
