import { NextFunction, Response } from "express";

export async function errorHandler(
  err: Error,
  res: Response,
  next: NextFunction
): Promise<any> {

  if (err.message.includes('parameter')) return res.status(401).send({ message: "Parâmetro inválido" })
  return res.status(500).json({ message: `Houve um problema, por favor tente novamente` })
}
