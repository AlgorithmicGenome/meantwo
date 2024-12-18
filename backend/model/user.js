import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created: { type: Date, default: Date.now }
})

export default mongoose.model('user', userSchema)
