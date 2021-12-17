/* eslint-disable sort-keys-fix/sort-keys-fix */

import BetterPropTypes from 'better-prop-types'

const ThemeColorShape = BetterPropTypes.shape({
  default: BetterPropTypes.string.isOptionalButNotNull,
  active: BetterPropTypes.string.isOptionalButNotNull,
  background: BetterPropTypes.string.isOptionalButNotNull,
})

const ThemeSizeShape = BetterPropTypes.shape({
  small: BetterPropTypes.string.isOptionalButNotNull,
  medium: BetterPropTypes.string.isOptionalButNotNull,
  large: BetterPropTypes.string.isOptionalButNotNull,
})

export const ThemeShape = BetterPropTypes.shape({
  appearance: BetterPropTypes.shape({
    borderRadius: ThemeSizeShape.isOptionalButNotNull,
  }).isOptionalButNotNull,

  breakpoint: BetterPropTypes.shape({
    sm: BetterPropTypes.string.isOptionalButNotNull,
    md: BetterPropTypes.string.isOptionalButNotNull,
    lg: BetterPropTypes.string.isOptionalButNotNull,
    xl: BetterPropTypes.string.isOptionalButNotNull,
  }).isOptionalButNotNull,

  color: BetterPropTypes.shape({
    a11n: BetterPropTypes.shape({
      focus: BetterPropTypes.shape({
        background: BetterPropTypes.string.isOptionalButNotNull,
        foreground: BetterPropTypes.string.isOptionalButNotNull,
      }),
    }).isOptionalButNotNull,

    body: BetterPropTypes.shape({
      background: BetterPropTypes.string.isOptionalButNotNull,
      light: BetterPropTypes.string.isOptionalButNotNull,
      main: BetterPropTypes.string.isOptionalButNotNull,
      white: BetterPropTypes.string.isOptionalButNotNull,
    }).isOptionalButNotNull,

    card: BetterPropTypes.shape({
      background: BetterPropTypes.string.isOptionalButNotNull,
    }).isOptionalButNotNull,

    primary: ThemeColorShape,
    secondary: ThemeColorShape,
    success: ThemeColorShape,
    danger: ThemeColorShape,
    warning: ThemeColorShape,
    info: ThemeColorShape,
  }).isOptionalButNotNull,

  padding: BetterPropTypes.shape({
    button: ThemeSizeShape.isOptionalButNotNull,
    input: ThemeSizeShape.isOptionalButNotNull,
    inputBox: ThemeSizeShape.isOptionalButNotNull,

    layout: BetterPropTypes.shape({
      tiny: BetterPropTypes.string.isOptionalButNotNull,
      small: BetterPropTypes.string.isOptionalButNotNull,
      medium: BetterPropTypes.string.isOptionalButNotNull,
      large: BetterPropTypes.string.isOptionalButNotNull,
      giant: BetterPropTypes.string.isOptionalButNotNull,
    }).isOptionalButNotNull,
  }).isOptionalButNotNull,

  shadow: ThemeSizeShape.isOptionalButNotNull,

  typography: BetterPropTypes.shape({
    font: BetterPropTypes.shape({
      default: BetterPropTypes.shape({
        family: BetterPropTypes.string.isOptionalButNotNull,
        size: BetterPropTypes.string.isOptionalButNotNull,
        weight: BetterPropTypes.number.isOptionalButNotNull,
      }).isOptionalButNotNull,
    }).isOptionalButNotNull,

    size: BetterPropTypes.shape({
      small: BetterPropTypes.number.isOptionalButNotNull,
      medium: BetterPropTypes.number.isOptionalButNotNull,
      large: BetterPropTypes.number.isOptionalButNotNull,
    }).isOptionalButNotNull,
  }).isOptionalButNotNull,
})
