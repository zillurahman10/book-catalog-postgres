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
exports.OrderService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createOrder = (payload, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const renamedUserData = Object.assign(Object.assign({}, userData), { user: userData.id });
    delete renamedUserData.id;
    delete renamedUserData.role;
    delete renamedUserData.iat;
    delete renamedUserData.exp;
    const fullData = Object.assign(Object.assign({}, payload), renamedUserData);
    console.log(fullData);
    const result = yield prisma_1.prisma.order.create({
        data: fullData,
    });
    return result;
});
exports.OrderService = {
    createOrder,
};
