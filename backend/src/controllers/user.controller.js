import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //        message:"explore ratnagiri with Pooja & Anuja"
    //     })
    const {fullName,email,password}=req.body;
    // if(
    //     [fullName,email,password].some((field)=>
    //     field?.trim()==="")
    // ){
    //     throw new ApiError(400,"All fields are required");
    // }
    if(!(fullName && email && password)){
        throw new ApiError(400,"All fields are required");
    }

    const existedUSer=await User.findOne({email});
    if(existedUSer){
        throw new ApiError(409,"User already exists");
    }
    const user=await User.create({fullName,email,password});

    const createdUser=await User.findById(user._id).select("-password");

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user");
    }

    return res.status(201).json(new ApiResponse(201,createdUser,"User registered successfully"));
    
})

const loginUser= asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
   console.log(email,password)
    if(!(email && password)){
        throw new ApiError(400,"All fields are required");
    }

    const user=await User.findOne({
        $or:[{email},{password}]
    });

    if(!user){
        throw new ApiError(404,"User does not exist");
    }

    const isPasswordValid=await user.isPasswordCorrect(password);
 
    if(!isPasswordValid){
        throw new ApiError(401,"Invalid user credentials");
    }   

    const loggedUser=await User.findById(user._id).select("-password");

    return res.status(200).json(new ApiResponse(200,loggedUser,"User logged in successfully"));
})

    
export{
    registerUser,
    loginUser,
}