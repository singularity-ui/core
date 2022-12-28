import type { Size } from '../constants'
import type { Theme } from '../types'

// eslint-disable-next-line @typescript-eslint/naming-convention
const __CACHE: Record<Size, string | null> = {
  large: null,
  medium: null,
  small: null,
}

export function getLowerFontSize(theme: Theme, size: Size): string {
  const lowerFontSize = __CACHE[size]

  if (lowerFontSize !== null) {
    return lowerFontSize
  }

  const newLowerFontSize = `${Math.round(theme.typography.size[size] * 90)}%`
  __CACHE[size] = newLowerFontSize

  return newLowerFontSize
}
