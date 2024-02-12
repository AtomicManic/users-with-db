import { Router } from "express";
import {
  getUsers,
  getUser,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

const router = Router();
router.get("/", getUsers);
router.get("/:userId", getUser);
router.get("/email/:email", getUserByEmail);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
