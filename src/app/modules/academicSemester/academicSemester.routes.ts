import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from './../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemesterValidation';

const router = express.Router();

router.post(
  '/',
  validateRequest(academicSemesterValidation.create),

  AcademicSemesterController.insertIntoDB
);
router.get(
  '/:id',
  AcademicSemesterController.getDataById
);

router.get("/",AcademicSemesterController.getAllFromDB)

router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.update),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.updateOneIntoDB
);
export const AcademicSemesterRoutes = router;
