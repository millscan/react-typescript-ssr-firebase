import * as functions from 'firebase-functions'
import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import App from './src/App'
import getFacts from './src/facts'
import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
app.get('**', (req, res) => {
  fs.readFile(
    path.join(__dirname, 'src', 'template.html'),
    'utf8',
    (err, index) => {
      if (err) {
        return res.status(500).send('Error sending page :(')
      }

      //fetch some stuff for the initial render if you want
      getFacts().then((facts) => {
        const props = { facts }
        const html = renderToNodeStream(<App {...props} />)
        const finalHtml = index
          .replace(
            '<script type="text/javascript" src="bundle.js"></script>',
            `<script>window.__INITIAL_PROPS__ = ${JSON.stringify(
              props
            )}</script><script type="text/javascript" src="bundle.js"></script>`
          )
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        res.set('Cache-Control', 'public, max-age=21600, s-maxage=172800')
        res.send(finalHtml)
      })
    }
  )
})

export let ssrapp = functions.https.onRequest(app)
