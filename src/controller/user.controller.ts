import { NextFunction, Request, Response } from "express";
import userRepo from "../repository/user.repository.js";
import { MissingAttributeError, NotFoundError } from "../errors/errors.js";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userRepo.getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    if (!userId) throw new MissingAttributeError("ID");
    const user = await userRepo.getUser(userId);
    if (!user) throw new NotFoundError(`User with id ${userId}`);
    res.status(200).json(user);
  } catch (error: any) {
    next(error);
  }
};

export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params.userId === ":email") throw new MissingAttributeError("ID");
    const email = req.params.email;
    const user = await userRepo.getUserByEmail(email);
    if (!user) throw new NotFoundError(`User with ${email}`);
    res.status(200).json(user);
  } catch (error: any) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    const userData = req.body;
    const user = await userRepo.updateUser(userId, userData);
    res.status(200).json(user);
  } catch (error: any) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.userId);
    if (!userId) throw new MissingAttributeError("ID");
    await userRepo.deleteUser(userId);
    res.status(204).send();
  } catch (error: any) {
    next(error);
  }
};
