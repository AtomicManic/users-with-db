var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MissingEntityError, AlreadyExistsError } from "../errors/errors.js";
import { getUserByEmail, createUser } from "../repository/user.repository.js";
import { random, auth } from "../utils/authentication.js";
export const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body || Object.keys(req.body).length == 0)
            throw new MissingEntityError("User");
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            throw new MissingEntityError(`${!email ? "Email" : ""} ${!password ? "Password" : ""} ${!username ? "Username" : ""}`);
        }
        const userExists = yield getUserByEmail(email);
        if (userExists) {
            throw new AlreadyExistsError("User");
        }
        const salt = random();
        const user = yield createUser({
            email,
            username,
            authentication: {
                salt,
                password: auth(salt, password),
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        next(error);
    }
});
