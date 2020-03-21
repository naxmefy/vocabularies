import isEmail from 'validator/lib/isEmail'

const validator = {
  required: value => {
    return typeof value !== 'undefined' && value !== null
  },

  min: (value, args) => {
    args = Number(args)
    return !isNaN(value) && value >= args
  },

  max: (value, args) => {
    args = Number(args)
    return !isNaN(value) && value <= args
  },

  email: value => {
    return value && isEmail(value)
  },
}

export default (value, definition) => {
  return definition.split(' ').every(def => {
    let args = ''
    if (def.indexOf('=') !== -1) {
      const [tmp, tmpArgs] = def.split('=')
      def = tmp
      args = tmpArgs
    }

    if (validator[def] && typeof validator[def] === 'function') return validator[def](value, args)
    throw new Error(`validator ${def} not exist`)
  })
}
