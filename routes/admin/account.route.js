import { Router } from "express";
import * as accountController from "../../controllers/admin/account.controller.js"
import * as validate from "../../validates/auth.validate.js";
const router = Router();

router.post("/register", validate.registerValidate, accountController.register);

export default router;