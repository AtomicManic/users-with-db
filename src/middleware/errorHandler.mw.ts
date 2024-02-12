import { Request, Response, NextFunction } from "express";
import { CustomError } from "../types/customError.type.js";

export const errorHandler = (
  err: Error | CustomError,
  req: any,
  res: Response,
  next: any
) => {
  res
    .status((err as CustomError)?.status || 500)
    .json({ message: err.message || "Internal Server Error" });
};
