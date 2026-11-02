import { Router } from "express";
import {
  createUser,
  getAllUser,
  homeFunction,
} from "../controller/auth.controller.js";
const router = Router();
router.get("/", homeFunction);
router.post("/create", createUser);
router.get("/getAll", getAllUser);
export default router;

