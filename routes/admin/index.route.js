import { Router } from "express";
import accountRoute from "./account.route.js";
const router = Router();

router.use("/account", accountRoute);

export default router;