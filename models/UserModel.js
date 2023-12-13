import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide Your name"],
    },
    email:{
        type:String,
        required:[true,'please provide your email address'],
        unique:[true,"This email address already exist"],
        lowercase:true,
        validate:[validator.isEmail , "Please provide a valid email address"]
    },
   domain:{
    type:String,
    required:[true,"Please Provide Your Domain"],
   }, 
   branch:{
    type: String,
    required:[true,"Please Provide Your Branch"],
   } ,
   password:{
    type:String,
    required:[true,"Please Provide your password"],
    minLength:[6, "PLease make sure your password is min 6 characters long "],
    maxLength:[64, "PLease make sure your password is max 64 characters long"]   
},
badges:{
    type:Array,
},
points:{
    type:Number,
    default:-1,

}
},
{

    collection:"users",
     timestamps:true
    
   },
)
userSchema.pre('save',async function(next){
    try{
        if(this.isNew){
            const salt=await bcrypt.genSalt(12);
            const hashedPassword=await bcrypt.hash(this.password,salt);
            this.password=hashedPassword
        }
        next();
    }
    catch(error){
        next(error);
    }
})


const UserModel= mongoose.models.UserModel || mongoose.model('UserModel', userSchema);
export default UserModel;