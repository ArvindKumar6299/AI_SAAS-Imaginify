import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false 
    })

  cached.conn = await cached.promise;

  return cached.conn;
}






// import mongoose , {Mongoose} from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseConnection{
//     conn: Mongoose | null;
//     promise: Promise<Mongoose>|null;
// }

// // Caching stores data so it doesn't need to be re-fetched 
// // from your data source on every request. By default, Next.js 
// // automatically caches the returned values of fetch 
// // in the Data Cache on the server.

// let cached: MongooseConnection = (global as any).mongoose

// if(!cached){
//     cached = (global as any).mongoose = {
//         conn: null, promise:null
//     }
// }

// export const connectToDatabase = async () => {
//     if(cached.conn) return cached.conn;

//     if(!MONGODB_URL) throw new Error('Missing mongodbURl');

//     cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
//         dbName: 'imaginify', bufferCommands: false
//     })

//     cached.conn = await cached.promise;

//     return cached.conn;
    

// }