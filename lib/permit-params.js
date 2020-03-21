import { getAt } from './object'

export default definition => {
  return (req, res, next) => {
    const errors = []

    for (let [key, value] of Object.entries(definition)) {
      console.log(key, value)
      console.log(`req.${key}`, getAt(req, key))
      // TODO
    }

    if (errors.length > 0) res.status(400).json(errors)
    next()
  }
}
