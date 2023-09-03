import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/users', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser);
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  UserController.getUserProfile
);

router.get(
  '/users/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUser
);

router.post('/signup', UserController.userSignUp);
router.post('/signin', UserController.userLogin);

router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateSingleUser
);

router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteSingleUser
);

export const UserRoutes = router;
