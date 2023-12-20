import createHttpError from 'http-errors';
import { UserModel } from '../models/index.js';


export const updatePointsAndTimestamps = async (userId, points, timestamps) => {
  try {
    // Find the user by ID
    const user = await UserModel.findById(userId);

    // Check if the user exists
    if (!user) {
      throw createHttpError.BadRequest('User not found.');
    }

    // Update points and timestamps
    user.points = points;
    user.timestamps = timestamps;

    // Save the updated user document
    await user.save();

    // Return the updated user document if needed
    return user;
  } catch (error) {
    // Handle any errors that occur during the update
    throw error;
  }
};

export const getUserDetails = async (userId) => {
    try {
      // Find the user by ID and exclude the password field
      const user = await UserModel.findById(userId).select('-password');
  
      // Check if the user exists
      if (!user) {
        throw createHttpError.BadRequest('User not found.');
      }
  
      // Return the details excluding the password field
      return user;
    } catch (error) {
      // Handle any errors that occur during the retrieval
      throw error;
    }
  };