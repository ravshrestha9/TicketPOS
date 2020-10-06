import mongoose from 'mongoose';
import {app} from './app';
const start = async() => {

  if(!process.env.JWT_KEY){
    throw new Error('JWT Key needs to be defined...')
  }

  try{
    await mongoose.connect('mongodb://tickets-mongo-srv:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('Connected to MongoDB...')
}
catch(err){
  console.error(err);
}

app.listen(3000, () => {
  console.log("Listening in port 3000!!");
});

};

start();
