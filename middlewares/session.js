import { session } from 'next-session'

export default async (req, res, next) => {
  // await applySession(req, res, {})
  // return new Promise(resolve => {
  //   next()
  //   return resolve()
  // })
  session()(req, res, next)
}
