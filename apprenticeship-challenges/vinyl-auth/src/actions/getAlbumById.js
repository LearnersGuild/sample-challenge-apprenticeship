import db from '../db'

export default function getAlbumById(albumId) {
  return db.one('SELECT * FROM albums WHERE id = $1', [albumId])
}
