import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";
import ChatGroupUserContoller from "../controllers/ChatGroupUserController.js";
const router = Router();
//auth routes
router.post("/auth/login", AuthController.login);
//chat group routes
router.post("/chat-group", authMiddleware, ChatGroupController.store);
router.get("/chat-group", authMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", ChatGroupController.show);
router.put("/chat-group/:id", authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", authMiddleware, ChatGroupController.destroy);
//chat group users
router.get("/chat-group-user", ChatGroupUserContoller.index);
router.post("/chat-group-user", ChatGroupUserContoller.store);
export default router;
