import { Prisma } from '@prisma/client';

const handleValidationError = (
  error: Prisma.PrismaClientValidationError
): { statusCode: number; message: string } => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const errors = [
    {
      path: '',
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
  };
};

export default handleValidationError;
