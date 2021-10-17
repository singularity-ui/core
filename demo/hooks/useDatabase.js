import React from 'react'

import Context from '../hocs/withDatabase/Context'

export default function useDatabase() {
  const contextValue = React.useContext(Context)

  return contextValue
}
