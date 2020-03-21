export default (req, res, next) => {
  try {
    next()
  } catch (e) {
    res.status(500).json({
      message: 'Server Error',
      e,
    })
  }
}
