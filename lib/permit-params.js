import { getAt } from './object'
import permitValidator from './permit-validator'

export default definition => {
  return (req, res, next) => {
    const errors = []

    for (let [key, def] of Object.entries(definition)) {
      const result = permitValidator(getAt(req, key), def)

      if (result) {
        errors.push({
          [key]: result,
        })
      }
    }

    if (errors.length > 0) return res.status(400).send(errors)
    else next()
  }
}
