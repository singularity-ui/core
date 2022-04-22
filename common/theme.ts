/* eslint-disable sort-keys-fix/sort-keys-fix, typescript-sort-keys/interface */

import { Unit } from './constants'

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type PartialTheme = DeepPartial<Theme>

export interface Theme {
  appearance: {
    borderRadius: {
      small: string
      medium: string
      large: string
    }
  }

  breakpoint: {
    sm: string
    md: string
    lg: string
    xl: string
  }

  color: {
    a11n: {
      focus: {
        background: string
        foreground: string
      }
    }

    body: {
      background: string
      black: string
      dark: string
      light: string
      main: string
      white: string
    }

    card: {
      background: string
    }

    list: {
      even: string
      odd: string
    }

    primary: {
      default: string
      active: string
      background: string
    }
    secondary: {
      default: string
      active: string
      background: string
    }
    success: {
      default: string
      active: string
      background: string
    }
    danger: {
      default: string
      active: string
      background: string
    }
    warning: {
      default: string
      active: string
      background: string
    }
    info: {
      default: string
      active: string
      background: string
    }
  }

  padding: {
    button: {
      small: string
      medium: string
      large: string
    }

    input: {
      small: string
      medium: string
      large: string
    }

    inputBox: {
      small: string
      medium: string
      large: string
    }

    layout: {
      tiny: string
      small: string
      medium: string
      large: string
      giant: string
    }

    tag: {
      small: string
      medium: string
      large: string
    }
  }

  shadow: {
    small: string
    medium: string
    large: string
  }

  typography: {
    font: {
      default: {
        family: string
        size: string
        weight: number
      }
    }

    size: {
      small: number
      medium: number
      large: number
    }
  }
}

export const theme: Theme = {
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
