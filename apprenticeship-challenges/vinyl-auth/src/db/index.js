import Promise from 'bluebird'
import pg from 'pg-promise'

const connect = pg({promiseLib: Promise})
const db = connect(process.env.DATABASE_URL)

export default db
