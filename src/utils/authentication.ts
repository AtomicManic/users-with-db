import crypto, { BinaryLike } from "crypto";

const hash_algorithm: string | undefined =
  process.env.HASH_ALGORITHM || "sha256";

const SECRET: BinaryLike = process.env.AUTH_SECRET || "";
export const random = () => crypto.randomBytes(16).toString("base64");

export const auth = (salt: string, password: string) =>
  crypto
    .createHmac(hash_algorithm, [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
