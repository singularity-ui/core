import { createContext } from 'react'

const noop = () => undefined

const Context = createContext({
  data: null,
  findByIdAndUpdate: noop,
})

export default Context
