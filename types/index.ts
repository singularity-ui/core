import { PropsWithChildren, ReactElement, ValidationMap, Validator } from 'react'

// TODO Expose "prop-types" declarations in "better-prop-types".
export type ReactComponentLike =
  | string
  | ((props: any, context?: any) => any)
  | (new (props: any, context?: any) => any)

export interface SuiComponent<NativeProps, CustomProps = {}> {
  (props: PropsWithChildren<NativeProps & CustomProps>, context?: any): ReactElement<any, any> | null
  contextTypes?: ValidationMap<any> | undefined
  displayName?: string | undefined
  propTypes: {
    [K in keyof CustomProps]: Validator<CustomProps[K]>
  }
}
