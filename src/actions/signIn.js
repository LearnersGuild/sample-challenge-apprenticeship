import db from '../db'

export default function signIn(email, password) {
  return db.one('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password])
}
