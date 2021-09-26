import { dbContext } from "../DAL/db-context";
import express from "express";
const router = express.Router();

export interface Lorem {
  id: number;
  info: string;
}

router.get("/lorem", async (req, res, next) => {
  try {
    let lorems: string[] = [];
    await (
      await dbContext
    ).each("SELECT id, info FROM lorem", function (err, row: Lorem) {
      lorems.push(`${row.id} ${row.info}`);
      console.log(row);
    });
    res.send(JSON.stringify(lorems));
  } catch (ex) {
    res.status(400).send("Get Lorem List Failed!");
  }
});

router.get("/lorem/:id", async (req, res, next) => {
  try {
    var lorem: Lorem | null = null;
    await (
      await dbContext
    ).each(
      `SELECT id , info FROM lorem Where Id = ${req.params.id}`,
      function (err, row: Lorem) {
        lorem = row;
      }
    );
    res.status(200).send(JSON.stringify(lorem));
  } catch (ex) {
    res.status(400).send(`Get Lorem id = ${req.params.id} Failed!`);
  }
});

router.post("/lorem", express.json(), async (req, res, next) => {
  try {
    let js: Lorem = req.body;
    await (
      await dbContext
    ).run(`INSERT INTO "main"."lorem"("info") VALUES ('${js.info}');`);
    res.status(200).send(JSON.stringify(js));
  } catch (ex) {
    console.log(ex);
    res.status(400).send(JSON.stringify(ex));
  }
});

router.put("/lorem/:id", express.json(), async (req, res, next) => {
  try {
    await (
      await dbContext
    ).run(
      `UPDATE "main"."lorem" SET "info" = '${req.body.info}' WHERE "id" = '${req.params.id}'`
    );
    res.status(200).send("Update Lorem Successed!");
  } catch (ex) {
    res.status(400).send("Update Lorem Failed!");
  }
});

router.delete("/lorem/:id", express.json(), async (req, res, next) => {
  try {
    await (
      await dbContext
    ).run(`Delete From "main"."lorem" Where id = ${req.params.id}`);
    res.status(200).send("Deleted Lorem Successed!");
  } catch (ex) {
    res.status(400).send("Deleted Lorem Failed!");
  }
});

export default router;
