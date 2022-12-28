/* eslint-disable sort-keys-fix/sort-keys-fix, typescript-sort-keys/interface */

import { Unit } from './constants'

import type { Theme } from './types'

export const THEME: Theme = {
  appearance: {
    borderRadius: {
      small: '0.25rem',
      medium: '0.33rem',
      large: '0.5rem',
    },
  },

  breakpoint: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },

  color: {
    a11n: {
      focus: {
        background: '#000000',
        foreground: '#ffffff',
      },
    },

    body: {
      background: '#f7f9fc',
      black: '#000000',
      dark: '#343a40',
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
      background: '#d9e6fb',
    },
    secondary: {
      default: '#7f838e',
      active: '#6c6f79',
      background: '#dbdcdd',
    },
    success: {
      default: '#4bbf73',
      active: '#40a262',
      background: '#dbf2e3',
    },
    danger: {
      default: '#d9534f',
      active: '#b84743',
      background: '#f7dddc',
    },
    warning: {
      default: '#cc8b37',
      active: '#ad762f',
      background: '#faeddb',
    },
    info: {
      default: '#1f9bcf',
      active: '#1a84b0',
      background: '#d2ebf5',
    },
  },

  padding: {
    button: {
      small: '0.375rem 0.75rem',
      medium: '0.5rem 1rem',
      large: '0.625rem 1.25rem',
    },

    input: {
      small: '0.375rem',
      medium: '0.5rem',
      large: '0.75rem',
    },

    inputBox: {
      small: `${Unit.U4 / 1.5}rem ${Unit.U8 / 1.5}rem`,
      medium: `${Unit.U4}rem ${Unit.U8}rem`,
      large: `${Unit.U4 * 1.5}rem ${Unit.U8 * 1.5}rem`,
    },

    layout: {
      tiny: '0.25rem',
      small: '0.5rem',
      medium: '1rem',
      large: '2rem',
      giant: '4rem',
    },

    tag: {
      small: `${Unit.U1 / 1.5}rem ${Unit.U8 / 1.5}rem ${Unit.U3 / 1.5}rem`,
      medium: `${Unit.U1}rem ${Unit.U8}rem ${Unit.U3}rem`,
      large: `${Unit.U1 * 1.5}rem ${Unit.U8 * 1.5}rem ${Unit.U3 * 1.5}rem`,
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