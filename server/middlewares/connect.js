import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import { connectToDB } from '../database/connectToDb';

const connectToDataBase = async (req, res, next) => {
  if (mongoose.connections[0].readyState) {
    return next();
  }

  await connectToDB();

  return next();
};

const middleware = nextConnect();

middleware.use(connectToDataBase);

export default middleware;
