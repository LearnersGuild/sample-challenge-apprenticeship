import db from '../db'

export default function getAlbums() {
  return db.any('SELECT * FROM albums')
}
