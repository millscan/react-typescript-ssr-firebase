import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import getFacts from './facts'
export type Fact = {
  text: string
}

// @ts-ignore
const props = window.__INITIAL_PROPS__ as { facts: Fact[] }

//if data isn't populated by the server, fetch it on the client
if (props) {
  hydrate(<App {...props} />, document.querySelector('#root'))
} else {
  getFacts().then((facts) =>
    hydrate(<App facts={facts} />, document.querySelector('#root'))
  )
}
