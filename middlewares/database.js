import config from '../lib/config'
import mongoose from 'mongoose'

export default async (req, res, next) => {
  if (mongoose.connections[0].readyState) {
    req.db = mongoose.connection[0]
  } else {
    req.db = await mongoose.connect(config.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  next()
}
