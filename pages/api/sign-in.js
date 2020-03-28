import connect from 'next-connect'
import error from '../../middlewares/error'
import middlewares from '../../middlewares'
import permitParams from '../../middlewares/permit-params'

const handler = connect({ onError: error })
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
