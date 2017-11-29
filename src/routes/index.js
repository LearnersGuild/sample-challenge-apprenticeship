import express from 'express'

import albums from './albums'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)

export default routes
