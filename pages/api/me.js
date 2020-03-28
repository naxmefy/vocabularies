import authenticated from '../../middlewares/authenticated'
import connect from 'next-connect'
import database from '../../middlewares/database'
import error from '../../middlewares/error'
import session from '../../middlewares/session'

const handler = connect()

handler.use(error)
handler.use(database)
handler.use(session)
handler.use(authenticated)

handler.get((req, res) => {
  res.json({
    rofl: 'mao',
  })
})

export default handler
