var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userRepo from "../repository/user.repository.js";
import { MissingAttributeError, NotFoundError } from "../errors/errors.js";
export const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepo.getUsers();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
export const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        if (!userId)
            throw new MissingAttributeError("ID");
        const user = yield userRepo.getUser(userId);
        if (!user)
            throw new NotFoundError(`User with id ${userId}`);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
export const getUserByEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.userId === ":email")
            throw new MissingAttributeError("ID");
        const email = req.params.email;
        const user = yield userRepo.getUserByEmail(email);
        if (!user)
            throw new NotFoundError(`User with ${email}`);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
export const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        const userData = req.body;
        const user = yield userRepo.updateUser(userId, userData);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
export const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        if (!userId)
            throw new MissingAttributeError("ID");
        yield userRepo.deleteUser(userId);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
