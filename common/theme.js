/* eslint-disable sort-keys-fix/sort-keys-fix */

import PropTypes from 'prop-types'

export default {
  appearance: {
    borderRadius: {
      small: '0.25rem',
      medium: '0.25rem',
      large: '0.375rem',
    },
  },
  color: {
    body: {
      background: '#f7f9fc',
      light: '#6c757d',
    },

    list: {
      even: '#ffffff',
      odd: '#f4f7f9',
    },

    primary: {
      default: '#3f80ea',
      active: '#366dc7',
    },
    secondary: {
      default: '#7f838e',
      active: '#6c6f79',
    },
    success: {
      default: '#4bbf73',
      active: '#40a262',
    },
    danger: {
      default: '#d9534f',
      active: '#b84743',
    },
    warning: {
      default: '#cc8b37',
      active: '#ad762f',
    },
    info: {
      default: '#1f9bcf',
      active: '#1a84b0',
    },
  },
  padding: {
    button: {
      small: '0.375rem 0.75rem',
      medium: '0.5rem 1rem',
      large: '0.75rem 1.5rem',
    },
    input: {
      small: '0.375rem',
      medium: '0.5rem',
      large: '0.75rem',
    },
    layout: {
      tiny: '0.25rem',
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
    },
  },
  typography: {
    font: {
      default: {
        family: `'Poppins', sans-serif`,
        size: '100%',
        weight: 300,
      },
    },
    size: {
      small: 0.875,
      medium: 1,
      large: 1.25,
    },
  },
}

const ThemeColorShape = PropTypes.shape({
  default: PropTypes.string,
  active: PropTypes.string,
})

const ThemeSizeShape = PropTypes.shape({
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
})

export const ThemeShape = PropTypes.shape({
  appearance: {
    borderRadius: ThemeSizeShape,
  },
  color: {
    body: {
      background: PropTypes.string,
      light: PropTypes.string,
    },

    primary: ThemeColorShape,
    secondary: ThemeColorShape,
    success: ThemeColorShape,
    danger: ThemeColorShape,
    warning: ThemeColorShape,
    info: ThemeColorShape,
  },
  padding: {
    button: ThemeSizeShape,
    input: ThemeSizeShape,
    layout: {
      tiny: PropTypes.string,
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
    },
  },
  typography: {
    font: {
      default: {
        family: PropTypes.string,
        size: PropTypes.string,
        weight: PropTypes.number,
      },
    },
    size: {
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number,
    },
  },
})
