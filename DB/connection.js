const mongoose= require('mongoose');



const dbURI = (process.env.DATABASE_URL);

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
// Export the connectDB function
module.exports = connectDB;