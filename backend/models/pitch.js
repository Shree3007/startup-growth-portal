const mongoose = require("mongoose");
const User = require("./user");

const commentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    },
    commentText: {
      type: String,
      required: true
    },
    commentedAt: {
      type: Date,
      default: Date.now
    }
  });

const pitchSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String, 
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    fundingRound: {
        type: String,
        required: true
    },
    fundingAmount: {
        type: Number,
        required: true
    },
    fundingYear: {
        type: Number,
        required: true
    },
    pitchDeckLink: {
        type: String,
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    coverImage:{
        type:String,
        required:true
    },
    comments: [commentSchema],
    submittedAt: {
        type: Date,
        default: Date.now()
    },
    mentorFeedback: [{
        mentorId:String,
        mentorName: String,
        comment: String,
        date: {type: Date, default: Date.now }
    }]
})

module.exports = mongoose.model('Pitch', pitchSchema);