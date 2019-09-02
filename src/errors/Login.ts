import { NextFunction, Response } from "express";

export async function errorHandler(
    err: Error,
    res: Response,
    next: NextFunction
): Promise<any> {

    switch (err.message) {
        case "jwt expired":
            return res.status(401).send({ message: "Token expirado" });
        default:
            return res.status(401).send({ message: "Token inválido" });
    }
}
