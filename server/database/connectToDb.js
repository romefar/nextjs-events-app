import mongoose from 'mongoose';

const user = process.env.MONGO_DB_USER_DEV;
const pass = process.env.MONGO_DB_PASS_DEV;
const dbName = process.env.MONGO_DB_NAME;

const connectionUrl =
  `mongodb+srv://${user}:${pass}@cluster0.ekpdd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const connectToDB = async () => {
  try {
    await mongoose.connect(connectionUrl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });

    console.info('Successfully connected to database.');
  } catch (error) {
    console.info(`Connection to a database failed. ${error.message}.`);
  }
};
