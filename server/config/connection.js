const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
