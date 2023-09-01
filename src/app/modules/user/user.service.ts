import { User } from '@prisma/client';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { prisma } from '../../../shared/prisma';
import { IUserLogin } from './user.interface';

const userSignUp = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

const userLogin = async (payload: IUserLogin) => {
  const { email, password } = payload;
  console.log(email, password);

  const isUserExist = await prisma.user.findMany({
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
  const token = jwtHelpers.createToken(
    {
      id,
      role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return token;
};

const getAllUser = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateSingleUser = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleUser = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UserService = {
  userSignUp,
  getAllUser,
  getSingleUser,
  userLogin,
  updateSingleUser,
  deleteSingleUser,
};
