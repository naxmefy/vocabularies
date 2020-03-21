import { applySession } from 'next-session'

export default async (req, res, next) => {
  await applySession(req, res, {})

  next()
}
