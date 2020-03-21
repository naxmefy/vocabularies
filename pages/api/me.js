import authenticated from '../../middlewares/authenticated'
import connect from 'next-connect'
import middlewares from '../../middlewares'

const handler = connect()

handler.use(middlewares)
handler.use(authenticated)

handler.get((req, res) => {
  res.json({
    rofl: 'mao',
  })
})

export default handler
