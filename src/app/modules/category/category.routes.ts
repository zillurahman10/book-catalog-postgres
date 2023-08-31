import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getSingleCategory);
router.post(
  '/create-category',
  //   auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.createCategory
);

router.patch('/:id', CategoryController.updateSingleCategory);
router.delete('/:id', CategoryController.deleteSingleCategory);

export const CategoryRoutes = router;
