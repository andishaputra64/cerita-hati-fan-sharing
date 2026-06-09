const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Judul cerita harus diisi'],
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: [true, 'Isi cerita harus diisi']
  },
  category: {
    type: String,
    enum: ['pekerjaan', 'cinta', 'keluarga', 'teman', 'kesehatan', 'keuangan', 'lainnya'],
    default: 'lainnya'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  reactions: {
    like: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    love: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    support: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Story', storySchema);
