/* eslint-disable sort-keys-fix/sort-keys-fix */

import BetterPropTypes from 'better-prop-types'

const ThemeColorShape = BetterPropTypes.shape({
  default: BetterPropTypes.string,
  active: BetterPropTypes.string,
  background: BetterPropTypes.string,
})

const ThemeSizeShape = BetterPropTypes.shape({
  small: BetterPropTypes.string,
  medium: BetterPropTypes.string,
  large: BetterPropTypes.string,
})

export const ThemeShape = BetterPropTypes.shape({
  appearance: BetterPropTypes.shape({
    borderRadius: ThemeSizeShape,
  }),

  breakpoint: BetterPropTypes.shape({
    sm: BetterPropTypes.string,
    md: BetterPropTypes.string,
    lg: BetterPropTypes.string,
    xl: BetterPropTypes.string,
  }),

  color: BetterPropTypes.shape({
    a11n: BetterPropTypes.shape({
      focus: BetterPropTypes.shape({
        background: BetterPropTypes.string,
        foreground: BetterPropTypes.string,
      }),
    }),

    body: BetterPropTypes.shape({
      background: BetterPropTypes.string,
      light: BetterPropTypes.string,
      main: BetterPropTypes.string,
      white: BetterPropTypes.string,
    }),

    card: BetterPropTypes.shape({
      background: BetterPropTypes.string,
    }),

    primary: ThemeColorShape,
    secondary: ThemeColorShape,
    success: ThemeColorShape,
    danger: ThemeColorShape,
    warning: ThemeColorShape,
    info: ThemeColorShape,
  }),

  padding: BetterPropTypes.shape({
    button: ThemeSizeShape,
    input: ThemeSizeShape,
    inputBox: ThemeSizeShape,

    layout: BetterPropTypes.shape({
      tiny: BetterPropTypes.string,
      small: BetterPropTypes.string,
      medium: BetterPropTypes.string,
      large: BetterPropTypes.string,
      giant: BetterPropTypes.string,
    }),
  }),

  shadow: ThemeSizeShape,

  typography: BetterPropTypes.shape({
    font: BetterPropTypes.shape({
      default: BetterPropTypes.shape({
        family: BetterPropTypes.string,
        size: BetterPropTypes.string,
        weight: BetterPropTypes.number,
      }),
    }),

    size: BetterPropTypes.shape({
      small: BetterPropTypes.number,
      medium: BetterPropTypes.number,
      large: BetterPropTypes.number,
    }),
  }),
})
