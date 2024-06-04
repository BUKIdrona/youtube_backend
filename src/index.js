// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()

// whenever you use iffy somewhere there is semicolon in start

// to connect mongodb to server
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.log("ERR: ", error)
//             throw error
//         })
        
//         app.liseten(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })


//     }catch(error){
//         console.error("Error:", error)
//         throw err
//     }
// })()



