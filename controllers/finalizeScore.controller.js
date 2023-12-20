import createHttpError from 'http-errors';
import { UserModel } from '../models/index.js';
import mongoose from 'mongoose';

export const updatePointsAndTimestamps = async(req,res,next)  => {
  
  try {
    const {userId, points, timestamps}=req.body ;
    const user = await UserModel.findById((userId));
    if(!user) throw createHttpError.BadRequest('Please fill all fields.')

    // Update points and timestamps
    user.points = points;
    user.timeElapsed = timestamps;

    // Save the updated user document
    await user.save();

    // Return the updated user document if needed
    res.json("Saved Successfull")
    return user;
  } catch (error) {
    // Handle any errors that occur during the update
    // throw error;
    console.log(error)
  }
};

export const getUserDetails = async (req,res,next) => {
    const {userId}=req.body;
    try {
      // Find the user by ID and exclude the password field
      const user = await UserModel.findById(userId).select('-password');
  
      // Check if the user exists
      if (!user) {
        throw createHttpError.BadRequest('User not found.');
      }
  
      // Return the details excluding the password field
      res.json(user)
      return user;
    } catch (error) {
      // Handle any errors that occur during the retrieval
      throw error;
    }
  };