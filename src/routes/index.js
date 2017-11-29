import express from 'express'

import albums from './albums'

import authentication from './authentication'

const routes = express.Router()

routes.use('/', authentication)
routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)

export default routes
