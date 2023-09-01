import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body);
  console.log(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order placed successfully',
    data: result,
  });
});

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

export const OrderController = {
  createOrder,
};
