import { z } from 'zod';

const AuthValidation = {
  signUp: {
    body: z.object({
      email: z.string(),
      name: z.string().optional(),
      password: z.string().min(8),
      phone: z.number().optional(),
    }),
    query: z.object({}),
    params: z.object({}),
  },
  signIn: {
    body: z.object({
      email: z.string(),
      password: z.string().min(8),
    }),
    query: z.object({}),
    params: z.object({}),
  },
  resetAuthPass: {
    body: z.object({
      newPassword: z.string().min(8),
      password: z.string().min(8),
    }),
    query: z.object({}),
    params: z.object({}),
  },
  getAuthAll: {
    body: z.object({}),
    params: z.object({}),
    query: z.object({
      limit: z.string().optional(),
      page: z.string().optional(),
      sort: z.string().optional(),
    }),
  },
};

export default AuthValidation;
