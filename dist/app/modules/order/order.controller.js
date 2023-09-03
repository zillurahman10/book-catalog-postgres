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
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.createOrder(req.body, req.user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Order placed successfully',
        data: result,
    });
}));
// const getAllCategories = catchAsync(async (req: Request, res: Response) => {
//   const result = await CategoryService.getAllCategories();
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'All categories retrivied successfully',
//     data: result,
//   });
// });
// const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await CategoryService.getSingleCategory(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category retrivied successfully',
//     data: result,
//   });
// });
// const updateSingleCategory = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const payload = req.body;
//   const result = await CategoryService.updateSingleCategory(id, payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category updated successfully',
//     data: result,
//   });
// });
// const deleteSingleCategory = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await CategoryService.deleteSingleCategory(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category deleted successfully',
//     data: result,
//   });
// });
exports.OrderController = {
    createOrder,
};
