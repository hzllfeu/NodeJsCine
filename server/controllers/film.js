const Film = require("../models/film");

exports.cget = async (req, res, next) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const newFilm = await Film.create(req.body);
    res.status(201).json(newFilm);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const [nbUpdate] = await Film.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
      individualHooks: true,
    });

    if (nbUpdate === 0) {
      return res.sendStatus(404);
    }

    const updatedFilm = await Film.findByPk(parseInt(req.params.id));
    res.json(updatedFilm);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const nbDeleted = await Film.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.sendStatus(nbDeleted ? 204 : 404);
  } catch (error) {
    next(error);
  }
};


exports.get = async (req, res, next) => { 
  try {
    const film = await Film.findByPk(parseInt(req.params.id));
    res.status(film ? 200 : 404).json(film);
  } catch (error) {
    next(error);
  }
};