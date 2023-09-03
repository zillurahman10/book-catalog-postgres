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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = require("../../../shared/prisma");
const userSignUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.create({
        data: payload,
    });
    return result;
});
const userLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    console.log(email, password);
    const isUserExist = yield prisma_1.prisma.user.findMany({
        where: {
            email: email,
            password: password,
        },
    });
    if (isUserExist === undefined || isUserExist === null || !isUserExist) {
        throw new Error('Email or Password not matched');
    }
    //creating token
    const { id, role } = isUserExist[0];
    const token = jwtHelpers_1.jwtHelpers.createToken({
        id,
        role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return token;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findMany();
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateSingleUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.delete({
        where: {
            id,
        },
    });
    return result;
});
const getUserProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
    });
    return result;
});
exports.UserService = {
    userSignUp,
    getAllUser,
    getSingleUser,
    userLogin,
    updateSingleUser,
    deleteSingleUser,
    getUserProfile,
};
