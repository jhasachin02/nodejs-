const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/sachin-test');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Event listeners for mongoose connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
});

module.exports = connectDB;
