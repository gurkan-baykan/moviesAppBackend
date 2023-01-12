import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import filmRouter from "./routes/film.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//İstekler yönetilir
app.use("/film", filmRouter);

app.get("/", function (req, res) {
  res.send("Hello World!");
});
//Http sunucusu oluşturuler

mongoose
  .connect(process.env.MONGO_IP_URL, {
    useUnifiedTopology: false,
  })
  .then(() => {
    console.log("connected to db...");
  });
/*
const database = await MongoClient.connect(
  "mongodb+srv://gurkanbaykan:fasturkey@cluster0.jjlsds7.mongodb.net/?retryWrites=true&w=majority"
);

console.log(database, "database");
export const connectDb = database.db("movies");
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
