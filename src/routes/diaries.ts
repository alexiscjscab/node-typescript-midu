import express, { Request, Response } from "express";
import * as diaries from "../services/diaresService";
import toNewDiaryEntry from "../utils";
const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.send(diaries.getEntries());
});

router.get("/sensitive", (_req: Request, res: Response) => {
  res.send(diaries.getEntriesSensitiveInfo());
});

router.get("/id/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const diary = diaries.findById(Number(id));
  diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {

    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedNewDiaryEntry = diaries.addEntry(newDiaryEntry);

    res.json(addedNewDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;
