import express from "express";
import { dbContext } from "./DAL/db-context";
const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("test!");
});

router.post("/test", express.json(), (req, res, next) => {
  res.send(JSON.stringify(req.body));
});

router.get("/db", async (req, res, next) => {
  let js: string[] = [];
  await (
    await dbContext
  ).each("SELECT info AS id, info FROM lorem", function (err, row) {
    console.log(row.id + ": " + row.info);
    js.push(row.id + ": " + row.info);
  });
  console.log(js);
  res.send(JSON.stringify(js));
});

export default router;
