import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;


// //clerkId, email, username, photo, firstName, lastName, planId, creditBalance

// import mongoose, { Schema } from "mongoose";
// import { models , model} from "mongoose";

// export interface User extends Document {
//     clerkId: string;
//     email: string;
//     username: string;
//     photo?: string;
//     firstName: string;
//     lastName: string;
//     planId?: number;
//     creditBalance: number;
//   }

// const UserSchema = new Schema({
//    clerkId:{ type:String, required: true , unique:true},
//    email:{ type:String, required: true , unique:true},
//    username:{ type:String, required: true, unique:true },
//    photo:{ type:String, required: true },
//    firstName:{ type:String,},
//    lastName:{ type:String, },
//    planId:{ type:Number, default:1 },
//    creditBalance:{ type:Number, default:10}

// })

// const User = models?.User || mongoose.model('User', UserSchema)

// export default User;