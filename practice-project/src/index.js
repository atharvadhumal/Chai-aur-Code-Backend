import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config( {
    path: './env'
})

connectDB()






/* this approach is basic and it makes this index.js more poluted

import express from "express"
const app = express()

//we have used ifee below, ifee means (in this we have a function) (here we want to execute it immediately)
(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw err   
    }
}) ()
    */