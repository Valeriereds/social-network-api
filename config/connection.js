const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb+srv://valeriereds:root123@cluster0.ml4pgok.mongodb.net/socialDB');

// Export connection
module.exports = mongoose.connection;