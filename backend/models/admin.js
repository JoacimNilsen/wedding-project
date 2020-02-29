import mongoose from 'mongoose'
import crypto from 'crypto'

export const User = mongoose.model('Admin', {
  username: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
    unique: true
  },
  email: {
    type: String,
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
  
})