import Film from "../models/film.js";
import { connectDb } from "../connect.js";
import { ObjectID } from "mongodb";

export const getFilms = async () => {
  try {
    const result = await connectDb.collection("films").find({}).toArray();
    return result;
  } catch (error) {
    return "hata var !!";
  }
};

export const createFilms = async (film = null) => {
  try {
    return connectDb().then((response) => {
      return response.collection("films").insertOne(film);
    });
  } catch (err) {
    return err;
  }
};

export const updateFilms = async (film = null) => {
  try {
    const { name, description, imageUrl, _id } = film;

    const updateDoc = {
      $set: {
        name: name,
        description: description,
        imageUrl: imageUrl,
      },
    };

    return connectDb().then((response) => {
      return response
        .collection("films")
        .updateOne({ _id: ObjectID(_id) }, updateDoc, { upsert: true });
    });
  } catch (err) {
    return err;
  }
};

export const deleteFilms = async (_id) => {
  return connectDb().then((response) => {
    return response.collection("films").deleteOne({ _id: ObjectID(_id._id) });
  });
};
