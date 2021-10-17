import Jabber from 'jabber'
// eslint-disable-next-line import/no-unresolved
import { LowSync, LocalStorage } from 'lowdb'
import * as R from 'ramda'
import React, { useEffect } from 'react'

import Context from './Context'

const DATABASE_NAME = 'singularity_demo'
const INITIAL_DATA = {
  users: [],
}

export default function withDatabase(Component) {
  return function WithDatabase(pageProps) {
    const databaseRef = React.useRef(new LowSync(new LocalStorage(DATABASE_NAME)))
    const [data, setData] = React.useState(INITIAL_DATA)

    const database = databaseRef.current

    useEffect(() => {
      const jabber = new Jabber()

      const users = R.addIndex(R.map)((_, index) => ({
        email: jabber.createEmail(),
        id: index,
        isActive: Math.random() < 0.5,
        name: jabber.createFullName(),
        organization: {
          name: `${jabber.createWord(6, true)} Inc.`,
        },
      }))(new Array(50).fill(null))

      const generatedData = {
        users,
      }

      database.data = { ...generatedData }
      database.write()

      setData({ ...generatedData })
    }, [])

    const findByIdAndUpdate = (collection, id, updatedItem) => {
      database.data[collection] = R.pipe(
        R.prop(collection),
        R.map(R.when(R.propEq('id', id), R.mergeDeepLeft(updatedItem))),
      )(database.data)

      database.write()

      setData({ ...database.data })
    }

    const providerValue = {
      data,
      findByIdAndUpdate,
    }

    return (
      <Context.Provider value={providerValue}>
        <Component {...pageProps} />
      </Context.Provider>
    )
  }
}
