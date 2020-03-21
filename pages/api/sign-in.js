import handler from '../../middlewares'
import permitParams from '../../lib/permit-params'

handler.use(
  permitParams({
    'body.email': 'required email',
    'body.password': 'required',
  }),
)
handler.post((req, res) => {
  // const { email, password } = req.body
  res.status(204).end()
})

export default handler
