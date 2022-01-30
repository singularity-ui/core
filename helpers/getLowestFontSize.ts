import type { Theme } from '../common/theme'

// eslint-disable-next-line @typescript-eslint/naming-convention
const __CACHE: Record<Common.Size, string | null> = {
  large: null,
  medium: null,
  small: null,
}

export function getLowestFontSize(theme: Theme, size: Common.Size): string {
  const lowestFontSize = __CACHE[size]

  if (lowestFontSize !== null) {
    return lowestFontSize
  }

  const newLowestFontSize = `${Math.round(theme.typography.size[size] * 80)}%`
  __CACHE[size] = newLowestFontSize

  return newLowestFontSize
}
