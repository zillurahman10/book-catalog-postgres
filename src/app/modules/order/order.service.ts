import { Order } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const createOrder = async (payload: Order, userData: any) => {
  const renamedUserData = { ...userData, user: userData.id };
  delete renamedUserData.id;

  const fullData = { ...payload, ...renamedUserData };
  console.log(fullData);
  const result = await prisma.order.create({
    data: fullData,
  });
  // return result;
};

export const OrderService = {
  createOrder,
};
