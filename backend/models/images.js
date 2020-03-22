import mongoose from 'mongoose'

  export const Image = mongoose.model('Image', {
    imageUrl: String,
    required: true
  })