import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    // {
    //     username: String,  this is one way to write
    //     email: String
    // }

    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        email: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true,

        }, 

        password: {
            type: String,
            required: [true, "must be of atleast 8 letters"], //we can also pass custom messages
            
        }

    }, {timestamps : true} //will automoatically make two fields named createdAt updatedAt storing all timestamps in mongoose
)

export const User = mongoose.model("User", userSchema)