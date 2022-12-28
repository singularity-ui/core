import type { Theme } from './types'
import type { CSSProp } from 'styled-components'

declare module '*.css'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}

  export declare type PolymorphicComponentProps<R extends Runtime, E extends StyledTarget<R>, P extends object> = Omit<
    E extends KnownTarget ? P & Omit<React.ComponentPropsWithRef<E>, keyof P> : P,
    'as' | 'theme'
  > & {
    as?: P extends {
      as?: string | AnyComponent
    }
      ? P['as']
      : E
    theme?: DefaultTheme
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}

declare module 'react-select/async/dist/react-select-async.esm' {
  export * from 'react-select/dist/declarations/src/async/index'
  // eslint-disable-next-line no-restricted-exports, import/no-default-export
  export { default } from 'react-select/dist/declarations/src/async/index'
}
