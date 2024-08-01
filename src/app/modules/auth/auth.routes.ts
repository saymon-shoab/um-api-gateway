

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from './../../middlewares/validateRequest';
import { authanticationController } from './auth.controller';
import { AuthValidation } from './auth.validation';


const router = express.Router();


router.post('/login',
    validateRequest(AuthValidation.loginZodSchema),
    authanticationController.loginUser
)

router.post('/refresh-token',
    validateRequest(AuthValidation.refreshTokenZodSchema),
    authanticationController.refreshToken
)

router.post('/change-password',
    auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN,ENUM_USER_ROLE.STUDENT,ENUM_USER_ROLE.FACULTY),
    validateRequest(AuthValidation.changePasswordZodSchema),
    authanticationController.changePassword
)



export const authRoutes = router;
