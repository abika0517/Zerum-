const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: String,
  location: String,
  date: String,
  peopleServed: Number,
  beneficiary: String,
  description: String,
  contributors: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
