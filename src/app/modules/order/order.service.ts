import { Order } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const createOrder = async (payload: Order) => {
  const result = await prisma.order.create({
    data: payload,
  });
  return result;
};

export const OrderService = {
  createOrder,
};
