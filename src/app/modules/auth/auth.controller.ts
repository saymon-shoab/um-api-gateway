import { NextFunction, Request, Response } from "express";
import { AuthanticationService } from "./auth.service";
import sendResponse from "../../../shared/response";
import config from "../../../config";
import httpStatus from "http-status";
import { AuthService } from "../../../shared/axios";


const loginUser = async(req:Request,res: Response, next: NextFunction) =>{
    try {
        const result = await AuthanticationService.loginUser(req)
       const {refreshToken, ...others} = result.data
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken',result.data.refreshToken, cookieOptions);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            message: "user loged in successfully",
            success:true,
            data: others
        })
    } catch (error) {
        next(error)
    }
}



const refreshToken = async(req:Request,res: Response, next: NextFunction) =>{
    try {
        const result = await AuthanticationService.refreshToken(req)
       const {refreshToken, ...others} = result.data
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken',result.data.refreshToken, cookieOptions);

        sendResponse(res,{
            statusCode: httpStatus.OK,
            message: "new Refresh token generated",
            success:true,
            data: others
        })
    } catch (error) {
        next(error)
    }
}

const changePassword = async(req:Request,res: Response, next: NextFunction) =>{
    try {
       const result = await AuthanticationService.changePassword(req)

        sendResponse(res,{
            statusCode: httpStatus.OK,
            message: "Password change successfully",
            success:true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}




export const authanticationController = {
  loginUser,
  refreshToken,
  changePassword
}