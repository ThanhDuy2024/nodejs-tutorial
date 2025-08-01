import { Router } from "express";
import * as accountController from "../../controllers/admin/account.admin.js";
const router = Router();

router.post("/register", accountController.register);

export default router;