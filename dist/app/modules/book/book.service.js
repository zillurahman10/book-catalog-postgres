"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = require("../../../shared/prisma");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.create({
        data: payload,
        include: {
            category: true,
        },
    });
    return result;
});
// kaj baki ache
const getAllBooks = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { searchTerm } = filters;
    const result = yield prisma_1.prisma.book.findMany({
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
    const total = yield prisma_1.prisma.book.count();
    return {
        meta: {
            page,
            size: 10,
            total,
            totalPage: 7,
        },
        data: result,
    };
});
const getBooksByCategoryId = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findUnique({
        where: {
            id: categoryId,
        },
        include: {
            book: true,
        },
    });
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateSingleBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getBooksByCategoryId,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
};
