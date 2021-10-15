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
    a11n: {
      focus: {
        background: '#000000',
      },
    },

    body: {
      background: '#f7f9fc',
      light: '#6c757d',
      main: '#495057',
      white: '#ffffff',
    },

    card: {
      background: '#ffffff',
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
  shadow: {
    small: '0 0 0.5rem 0 rgba(0, 0, 0, 0.05)',
    medium: '0 0 1rem 0 rgba(0, 0, 0, 0.05)',
    large: '0 0 2rem 0 rgba(0, 0, 0, 0.05)',
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
  appearance: PropTypes.shape({
    borderRadius: ThemeSizeShape,
  }),

  color: PropTypes.shape({
    a11n: PropTypes.shape({
      focus: PropTypes.shape({
        background: PropTypes.string,
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
    layout: PropTypes.shape({
      tiny: PropTypes.string,
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
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
