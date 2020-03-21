import database from './database'
import error from './error'
import nextConnect from 'next-connect'
import redirect from './redirect'
import session from './session'

const handler = nextConnect()
handler.use(error)
handler.use(redirect)
handler.use(database)
handler.use(session)

export default handler
