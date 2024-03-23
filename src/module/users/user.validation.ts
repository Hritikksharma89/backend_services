import { z } from 'zod'

const social = z.object({
  name: z.string(),
  url: z.string(),
})
const project = z.string()
const team = z.string()
const task = z.string()
/**
 * Defines User validation schemas.
 */

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
  deleteUser: {
    body: z.object({}),
    params: z.object({
      id: z.string().min(24).max(24),
    }),
    query: z.object({}),
  },
  getUserById: {
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
  updateUser: {
    body: z.object({
      name: z.string(),
      email: z.string(),
      phone: z.number().optional(),
      emailVerified: z.boolean().optional(),
      bio: z.string().optional(),
      socials: z.array(social).optional(),
      dob: z.date().optional(),
      language: z.string().optional(),
      membership: z.string().optional(),
      role: z.string().optional(),
      projects: z.array(project).optional(),
      teams: z.array(team).optional(),
      tasks: z.array(task).optional(),
      onboarding: z.boolean().optional(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
    }),
    params: z.object({
      id: z.string().min(24).max(24),
    }),
    query: z.object({}),
  },
}

export default UserValidation
