import express from "express";
import * as database from "./configs/database.js"
import router from "./routes/admin/index.route.js";
const app = express()
const port = 3000

database.connect();

app.use('/api/admin', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})