module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: ['components/**/*.js', 'lib/**/*.js', 'middlewares/**/*.js', 'models/**/*.js', 'pages/**/*.js'],
}
