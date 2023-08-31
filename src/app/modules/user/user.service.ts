import { prisma, User } from '../../../shared/prisma';

const userSignUp = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

export const UserService = {
  userSignUp,
};
