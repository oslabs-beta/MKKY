import mongoose from 'mongoose';

let isConnected = false; 

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected){
    console.log('MongoDB is already connected');
    return
  }
  try{
    await mongoose.connect(process.env.MONGODB_URI!);
    isConnected = true;
    console.log('Mongoose is now connected');

    mongoose.connection.once('open', function() {
      console.log('Mongoose has opened a connection');
    });
  }
  catch(error){
    console.log(error);
  }
}

