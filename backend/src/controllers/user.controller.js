import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler(async(req,res)=>{
    res.status(200).json({
           message:"explore ratnagiri with Pooja & Anuja"
        })
})

export{
    registerUser,
}