const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ejemplo1', {useNewUrlParser: true});

module.exports = mongoose;