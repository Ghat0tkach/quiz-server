import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors"
import createHttpError from "http-errors";
import routes from './routes/index.js'

const app=express();
//dotEnv config
dotenv.config();
const {DATABASE_URL}=process.env;
const PORT =process.env.PORT || 8000;


//Helmet
app.use(helmet())

//parse json request  body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//sanitize request data
app.use(mongoSanitize())

//Enable cookie parser
app.use(cookieParser());


//cors
app.use(cors())

//mongoose error
mongoose.connection.on('error',(err)=>{
    console.log(`MongoDB connection error ${err}`)
})

//mongodb connect
mongoose.connect(DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected to MONGODB")
})




//start server
let server;
server= app.listen(8000,()=>{
    console.log(`Server has started on port ${PORT}`)
});


app.post ('/',(req,res)=>{
    res.send("hello from server")
})
//api v1 routes
app.use("/api/v1",routes)  //http://localhost:5000/api/v1/auth/register


app.use(async(req,res,next)=>{
    next(createHttpError.NotFound("This route does not exist"))
})
//error handling
app.use(async(err,req,res,next)=>{
    res.status(err.status || 500)
    res.send(
        {
            error:{
                status:err.status || 500,
                message:err.message,
            }
        }
    )
})