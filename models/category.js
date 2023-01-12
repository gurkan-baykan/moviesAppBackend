import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: String,
});

const category = mongoose.model("category", categorySchema);

export default category;
