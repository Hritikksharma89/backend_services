import { z } from 'zod'

const UserValidation = {
  create: {
    body: z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.number().optional(),
      emailVerified: z.boolean().optional(),
      bio: z.string().optional(),
      language: z.string().optional(),
      dob: z.string().optional(),
      role: z.string().optional(),
    }),
    params: z.object({}),
    query: z.object({}),
  },
  delete: {
    body: z.object({}),
    params: z.object({
      id: z.string().min(24).max(24),
    }),
    query: z.object({}),
  },
  getById: {
    body: z.object({}),
    params: z.object({
      id: z.string().min(24).max(24),
    }),
    query: z.object({}),
  },
  getAll: {
    body: z.object({}),
    params: z.object({}),
    query: z.object({
      limit: z.string().optional(),
      page: z.string().optional(),
    }),
  },
  update: {
    body: z.object({
      name: z.string(),
      phone: z.number().optional(),
      emailVerified: z.boolean().optional(),
      bio: z.string().optional(),
      language: z.string().optional(),
      dob: z.string().optional(),
      role: z.string().default('User'),
    }),
    params: z.object({}),
    query: z.object({}),
  },
}

export default UserValidation
