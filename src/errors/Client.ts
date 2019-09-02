import { NextFunction, Response } from "express";

export async function errorHandler(
  err: Error,
  res: Response,
  next: NextFunction
): Promise<any> {

  switch (err.message) {
    case "client-already-created":
      return res.status(401).send({ message: "Cliente já registrado." });
    case "invalid-password":
      return res.status(401).send({ message: "Dados inválidos" });
    default:
      res.status(500).json({ message: `Houve um problema, por favor tente novamente` })
  }
}
