/* eslint-disable sort-keys-fix/sort-keys-fix */

import PropTypes from 'prop-types'

const ThemeColorShape = PropTypes.shape({
  default: PropTypes.string,
  active: PropTypes.string,
  background: PropTypes.string,
})

const ThemeSizeShape = PropTypes.shape({
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
})

const ThemeShape = PropTypes.shape({
  appearance: PropTypes.shape({
    borderRadius: ThemeSizeShape,
  }),

  breakpoint: PropTypes.shape({
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
  }),

  color: PropTypes.shape({
    a11n: PropTypes.shape({
      focus: PropTypes.shape({
        background: PropTypes.string,
        foreground: PropTypes.string,
      }),
    }),

    body: PropTypes.shape({
      background: PropTypes.string,
      light: PropTypes.string,
      main: PropTypes.string,
      white: PropTypes.string,
    }),

    card: PropTypes.shape({
      background: PropTypes.string,
    }),

    primary: ThemeColorShape,
    secondary: ThemeColorShape,
    success: ThemeColorShape,
    danger: ThemeColorShape,
    warning: ThemeColorShape,
    info: ThemeColorShape,
  }),

  padding: PropTypes.shape({
    button: ThemeSizeShape,
    input: ThemeSizeShape,
    inputBox: ThemeSizeShape,

    layout: PropTypes.shape({
      tiny: PropTypes.string,
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
      giant: PropTypes.string,
    }),
  }),

  shadow: ThemeSizeShape,

  typography: PropTypes.shape({
    font: PropTypes.shape({
      default: PropTypes.shape({
        family: PropTypes.string,
        size: PropTypes.string,
        weight: PropTypes.number,
      }),
    }),

    size: PropTypes.shape({
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number,
    }),
  }),
})

export default ThemeShape
