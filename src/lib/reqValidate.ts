import { Request } from 'express'
import { ZodError, ZodObject, z } from 'zod'

interface IZObject {
  body?: z.AnyZodObject
  params?: z.AnyZodObject
  query?: z.AnyZodObject
}

const reqValidate = async (
  req: Request,
  zObject: IZObject,
): Promise<{
  status: boolean
  message: string
  body?: { status?: boolean; data?: object }
  query?: { status?: boolean; data?: object }
  param?: { status?: boolean; data?: object }
}> => {
  const body: any = zObject.body?.safeParse(req.body)
  const query:any = zObject.query?.safeParse(req.query)
  const param:any = zObject.params?.safeParse(req.params)
  const errMessage = `${body?.error?.issues[0]?.validation + body?.error?.issues[0]?.message+query?.error?.issues[0]?.validation + query?.error?.issues[0]?.message+param?.error?.issues[0]?.validation + param?.error?.issues[0]?.message}`
  if (!body?.success || !query?.success || !param?.success) {
    return {
      status: false,
      message: errMessage,
    }
  }
  return { status: true, message: 'Validation success', body, query, param }
}

export default reqValidate
