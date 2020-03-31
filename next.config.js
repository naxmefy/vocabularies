module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  env: {
    DB_URL: process.env.DB_URL || 'mongodb://localhost/vocabularies',
  },
}
