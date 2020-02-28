import mongoose from 'mongoose'

export const Guest = mongoose.model('Guest', {
  first_name: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  last_name: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: true
  },
  email: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  phone: {
    type: Number
  },
  allergies: {
    type: String
  },
  other: {
    type: String
  },
  isAttending: {
    type: Boolean,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})