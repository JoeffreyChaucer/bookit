import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connect.readyState >= 1) {
    return;
  }

  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
