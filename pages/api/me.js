import authenticated from '../../middlewares/authenticated'
import handler from '../../middlewares'

handler.use(authenticated)
handler.get((req, res) => {
  res.json({
    rofl: 'mao',
  })
})

export default handler
