export type IUserLogin = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  success: boolean;
  statusCode: 200;
  message: string;
  token: string;
};
