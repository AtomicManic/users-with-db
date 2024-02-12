import { UserModel } from "../models/user.model.js";
import { User, UserWithoutSessionToken } from "../types/user.types.js";

export const getUsers = async () => {
  const users = await UserModel.find();
  return users;
};

export const getUser = async (userId: number) => {
  const user = await UserModel.findById(userId);
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({
    email,
  });
  return user;
};

export const getUserBySessionToken = async (sessionToken: string) => {
  const user = await UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
  return user;
};

export const createUser = async (userData: UserWithoutSessionToken) => {
  const user = new UserModel(userData);
  await user.save();
  return user;
};

export const updateUser = async (userId: number, userData: Partial<User>) => {
  const user = await UserModel.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  return user;
};

export const deleteUser = async (userId: number) => {
  await UserModel.findByIdAndDelete(userId);
};

export default {
  getUsers,
  getUser,
  getUserByEmail,
  getUserBySessionToken,
  createUser,
  updateUser,
  deleteUser,
};
