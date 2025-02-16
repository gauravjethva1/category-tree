import { RequestWithValidate } from 'types/common'

const getValidatedData = <T extends Record<string, any>>(
  req: RequestWithValidate
): T => {
  return {
    ...req.validatedData?.query,
    ...req.validatedData?.params,
    ...req.validatedData?.body
  } as T
}

export { getValidatedData }
