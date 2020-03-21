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
  const defs = definition.split(':')
  for (let i = 0; i < defs.length; i++) {
    let def = defs[i]

    let args = ''
    if (def.indexOf('=') !== -1) {
      const [tmp, tmpArgs] = def.split('=')
      def = tmp
      args = tmpArgs
    }

    if (validator[def] && typeof validator[def] === 'function') {
      if (!validator[def](value, args)) return defs[i]
    } else {
      throw new Error(`validator ${def} not exist`)
    }
  }
}
