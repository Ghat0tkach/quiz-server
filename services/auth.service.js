import createHttpError from "http-errors";
import validator from "validator";
import { UserModel } from "../models/index.js";
import bcrypt from "bcrypt"


//env variables

export const createUser=async (userData) =>{
    const {name,email,branch,domain,password}=userData ;
   
    //check if fields are empty
    if(!name || !email || !password){
        throw createHttpError.BadRequest("Please fill all fields");
    }

    //check name length
    if(!validator.isLength(name,{
        min:2,
        max:64,
    })){
        throw createHttpError.BadRequest("Please make sure your name is between 2 and 64 characters")
    }

   

    // check if email is valid 
    if(!validator.isEmail(email)){
        throw createHttpError.BadRequest(
            "Please make sure to provide a valid email address"
        )
    }


    // check if user already exist
    const checkDb=await UserModel.findOne({email});
    if(checkDb){
        throw createHttpError.Conflict("User already exists , Please login using your email")
    }

    //check password length
    if(!validator.isLength(password,{
        min:6,
        max:128
    }
       )){
        throw createHttpError.BadRequest(
            "Please make sure your password is between 6 and 128 characters"
        )
       }


    //hash password --> to be done in user module


    //add user in database
       const user=await new UserModel({
        name,
        email,
        domain,
        branch,
        password
       }).save();

       return user;
  

}


export const signUser=async (email,password)=>{
    const user=await UserModel.findOne({email:email.toLowerCase()}).lean();
    
    //check if user exists
    if(!user){
        throw createHttpError.NotFound("User doesnt exist")
    }

    //compare passwords
    let passwordMatches=await bcrypt.compare(password,user.password)
    if(!passwordMatches) throw createHttpError.NotFound("Invalid Password")

    return user;
}