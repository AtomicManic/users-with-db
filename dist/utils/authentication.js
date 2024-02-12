import crypto from "crypto";
const hash_algorithm = process.env.HASH_ALGORITHM || "sha256";
const SECRET = process.env.AUTH_SECRET || "";
export const random = () => crypto.randomBytes(16).toString("base64");
export const auth = (salt, password) => crypto
    .createHmac(hash_algorithm, [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
