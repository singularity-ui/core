export type CustomElement = {
  children: CustomText[]
  link?: string
  type: string
}

export type CustomText = Record<string, any> & {
  text: string
}
