 import express from "express"
 import cors from "cors"
 import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
 dotenv.config();
 const port=4000;
 const app=express();
 app.use(express.json())
 app.use(cors())
 connectDB();
 app.use("/api/food",foodRouter)
 app.use("/image",express.static('uploads'))
 app.use("/api/user",userRouter)
 app.get("/",(req,res)=>{
    res.send("API working")
 })
 app.listen(process.env.PORT,()=>{
    console.log(`server startes at ${process.env.PORT}`)
 }) 
