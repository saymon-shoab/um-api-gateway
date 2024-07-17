
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
