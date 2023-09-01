import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getSingleBook);
router.get('/:categoryId/category', BookController.getBooksByCategoryId);
router.post('/create-book', BookController.createBook);
router.patch('/:id', BookController.updateSingleBook);
router.delete('/:id', BookController.deleteSingleBook);

export const BookRoutes = router;
