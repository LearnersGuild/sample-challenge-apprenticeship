import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes'

export function start() { // eslint-disable-line import/prefer-default-export
  const PORT = process.env.PORT || 3000
  const ROOT_DIR = path.resolve(__dirname, '../')

  const app = express()

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))

  app.use(ROOT_DIR, express.static('public'))
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  app.use(routes)

  app.use((req, res) => {
    res.status(404).render('not_found')
  })

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(404).render('error', {error: err})
  })

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`) // eslint-disable-line no-console
  })
}
