const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    teamName: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    domain: String,
    avatar: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
