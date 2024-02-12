var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserModel } from "../models/user.model.js";
export const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserModel.find();
    return users;
});
export const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.findById(userId);
    return user;
});
export const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.findOne({
        email,
    });
    return user;
});
export const getUserBySessionToken = (sessionToken) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.findOne({
        "authentication.sessionToken": sessionToken,
    });
    return user;
});
export const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new UserModel(userData);
    yield user.save();
    return user;
});
export const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.findByIdAndUpdate(userId, userData, {
        new: true,
    });
    return user;
});
export const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserModel.findByIdAndDelete(userId);
});
export default {
    getUsers,
    getUser,
    getUserByEmail,
    getUserBySessionToken,
    createUser,
    updateUser,
    deleteUser,
};
