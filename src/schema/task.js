const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['completed', 'pending'],
    default: 'pending'
  },
});

const taskModel = mongoose.model("state", taskSchema);

module.exports = taskModel;