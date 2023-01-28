const mongoose = require("mongoose");

const User = mongoose.model('User', { username: { type: String, require: true }, password: String });

module.exports = { User }