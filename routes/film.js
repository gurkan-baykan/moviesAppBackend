import {
  getFilms,
  createFilms,
  updateFilms,
  deleteFilms,
} from "../controllers/film.js";
import express from "express";

const app = express();
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const response = await getFilms();

    res.send({ data: response });
  } catch (e) {
    req.send({ error: e });
  }
});
router.post("/save", (req, res) => {
  createFilms(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => {
      res.send({ error: e });
    });
});
router.post("/update", (req, res) => {
  updateFilms(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => {
      res.send({ error: e });
    });
});
router.delete("/delete", (req, res) => {
  deleteFilms(req.query)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((e) => {
      res.send({ error: e });
    });
});
export default router;
