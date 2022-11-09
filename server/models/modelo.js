const mongoose = require("mongoose");
const esquema = new mongoose.Schema({
    nombre: String,
    edad: Number
})
const User = mongoose.model('User', esquema);

module.exports = User;