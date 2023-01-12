import mongoose from "mongoose";

const filmSchema = mongoose.Schema({
  name: String,
  imageUrl: String,
  rating: Number,
  description: String,
});

const Film = mongoose.model("Film", filmSchema);

export default Film;
