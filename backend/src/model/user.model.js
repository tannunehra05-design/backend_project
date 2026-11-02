import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        tolowercase: true
    },
    role:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
})

const User = mongoose.model("User",schema)

export default User;