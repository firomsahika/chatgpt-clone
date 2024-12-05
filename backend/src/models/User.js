import mongoose from "mongoose";
import { randomBytes, randomUUID } from 'crypto'
import { type } from "os";


const chatSchema = new mongoose.Schema({
    id:{
        type:String,
        default: randomUUID(),
    },
    role:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true,
    }
})
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        minLength: 6,
    },
    chats: [chatSchema],
})

export default mongoose.model("User", userSchema)
