import connect from 'next-connect'
import middlewares from '../../middlewares'
import permitParams from '../../lib/permit-params'

const handler = connect()
handler.use(middlewares)
handler.use(
  permitParams({
    'body.email': 'required:email',
    'body.password': 'required',
  }),
)
handler.post((req, res) => {
  // const { email, password } = req.body
  // TODO
  res.status(204).end()
})

export default handler
