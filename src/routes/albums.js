import express from 'express'

import {
  getAlbums,
  getAlbumById,
} from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAlbums()
    .then(albums => res.render('index', {albums}))
    .catch(next)
})

router.get('/:albumID', (req, res, next) => {
  getAlbumById(req.params.albumID)
    .then(album => res.render('album', {album}))
    .catch(next)
})

export default router
