import express from "express";
import 'dotenv/config'
import * as database from "./configs/database.js"
import router from "./routes/admin/index.route.js";
const app = express()
const port = 3000;
database.connect();

app.use(express.json());
app.use('/api/admin', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})