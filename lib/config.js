if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    DB_URL: process.env.DB_URL,
  }
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {}
}
