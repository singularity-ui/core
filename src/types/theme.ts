import type { DeepPartial } from './common'

export interface Theme {
  appearance: {
    borderRadius: {
      large: string
      medium: string
      small: string
    }
  }

  breakpoint: {
    lg: string
    md: string
    sm: string
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

    danger: {
      active: string
      background: string
      default: string
    }

    info: {
      active: string
      background: string
      default: string
    }
    list: {
      even: string
      odd: string
    }
    primary: {
      active: string
      background: string
      default: string
    }
    secondary: {
      active: string
      background: string
      default: string
    }
    success: {
      active: string
      background: string
      default: string
    }
    warning: {
      active: string
      background: string
      default: string
    }
  }

  padding: {
    button: {
      large: string
      medium: string
      small: string
    }

    input: {
      large: string
      medium: string
      small: string
    }

    inputBox: {
      large: string
      medium: string
      small: string
    }

    layout: {
      giant: string
      large: string
      medium: string
      small: string
      tiny: string
    }

    tag: {
      large: string
      medium: string
      small: string
    }
  }

  shadow: {
    large: string
    medium: string
    small: string
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
      large: number
      medium: number
      small: number
    }
  }
}

export type PartialTheme = DeepPartial<Theme>
