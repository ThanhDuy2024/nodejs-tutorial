import { Router } from "express";
import * as accountController from "../../controllers/admin/account.controller.js"
const router = Router();

router.post("/register", accountController.register);

export default router;