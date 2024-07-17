import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AcademicSemesterController } from './academicDepartment.controller';
import { AcademicSemesterValidation } from './academicDepartment.validation';


const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.post(
    '/',
    validateRequest(AcademicSemesterValidation.create),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicSemesterController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(AcademicSemesterValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicSemesterController.updateOneIntoDB
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicSemesterController.deleteByIdFromDB
);

export const academicSemesterRoutes = router;