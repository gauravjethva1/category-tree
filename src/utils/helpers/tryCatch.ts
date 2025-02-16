import { Request, Response, NextFunction } from 'express'

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void

const tryCatch =
  (controller: Controller) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      next(error)
    }
  }

export { tryCatch }
