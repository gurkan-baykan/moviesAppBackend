import Film from "../models/film.js";

export const getFilms = async () => {
  try {
    const result = await Film.find();

    return result;
  } catch (error) {
    return "hata var !!";
  }
};

export const createFilms = async (film = null) => {
  try {
    const result = await Film.create(film);

    if (result) return result;
  } catch (err) {
    return err;
  }
};

export const updateFilms = async (film = null) => {
  try {
    const { name, description, imageUrl, _id } = film;
    const result = await Film.findByIdAndUpdate(_id, {
      name: name,
      description: description,
      imageUrl: imageUrl,
    });

    if (result) return result;
  } catch (err) {
    return err;
  }
};

export const deleteFilms = async (film) => {
  return await Film.findByIdAndRemove({ _id: film._id });
};
