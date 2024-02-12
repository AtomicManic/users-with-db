import { Request, Response, NextFunction } from "express";
import { MissingEntityError, AlreadyExistsError } from "../errors/errors.js";
import { getUserByEmail, createUser } from "../repository/user.repository.js";
import { random, auth } from "../utils/authentication.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body || Object.keys(req.body).length == 0)
      throw new MissingEntityError("User");
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      throw new MissingEntityError(
        `${!email ? "Email" : ""} ${!password ? "Password" : ""} ${
          !username ? "Username" : ""
        }`
      );
    }
    const userExists = await getUserByEmail(email);
    if (userExists) {
      throw new AlreadyExistsError("User");
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: auth(salt, password),
      },
    });

    res.status(201).json(user);
  } catch (error: any) {
    next(error);
  }
};
