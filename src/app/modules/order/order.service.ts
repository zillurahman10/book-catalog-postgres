import { Order } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const createOrder = async (payload: Order, userData: any) => {
  const fullData = { ...payload, ...userData };
  console.log(fullData);
  const result = await prisma.order.create({
    data: fullData,
  });
  return result;
};

export const OrderService = {
  createOrder,
};
