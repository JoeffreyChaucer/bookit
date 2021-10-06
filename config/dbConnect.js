import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connect.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => console.log('Connected to the DB'));
};

export default dbConnect;
