import { Book } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { prisma } from '../../../shared/prisma';
import { IBookFilterRequest } from './book.interface';

const createBook = async (payload: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: payload,
    include: {
      category: true,
    },
  });
  return result;
};

// kaj baki ache
const getAllBooks = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm } = filters;

  const result = await prisma.book.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          author: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
        {
          genre: {
            contains: searchTerm,
            mode: 'insensitive',
          },
        },
      ],
    },
    skip,
    take: limit,
  });

  const total = await prisma.book.count();

  return {
    meta: {
      page,
      size: 10,
      total,
      totalPage: 7,
    },
    data: result,
  };
};

const getBooksByCategoryId = async (categoryId: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      book: true,
    },
  });
  return result;
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateSingleBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getBooksByCategoryId,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
