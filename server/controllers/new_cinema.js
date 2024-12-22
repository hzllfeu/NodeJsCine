const Cinema = require("../models/new_cinema");

// GET /cinemas (Retrieve all cinemas)
exports.cget = async (req, res, next) => {
  try {
    const cinemas = await Cinema.findAll();
    res.json(cinemas);
  } catch (error) {
    next(error);
  }
};

// GET /cinemas/:id (Retrieve a single cinema by ID)
exports.get = async (req, res, next) => {
  try {
    const cinema = await Cinema.findByPk(parseInt(req.params.id));
    res.status(cinema ? 200 : 404).json(cinema);
  } catch (error) {
    next(error);
  }
};

// POST /cinemas (Create a new cinema)
exports.post = async (req, res, next) => {
  try {
    const newCinema = await Cinema.create({
      name: req.body.name,
      numberPlace: req.body.numberPlace,
      currentTime: req.body.currentTime,
      createdDate: req.body.createdDate,
      numberPerson: req.body.numberPerson,
      organization: req.body.organization,
    });
    res.status(201).json(newCinema);
  } catch (error) {
    next(error);
  }
};

// PATCH /cinemas/:id (Update a cinema by ID)
exports.patch = async (req, res, next) => {
  try {
    const [nbUpdate] = await Cinema.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
      individualHooks: true,
    });

    if (nbUpdate === 0) {
      return res.sendStatus(404);
    }

    const updatedCinema = await Cinema.findByPk(parseInt(req.params.id));
    res.json(updatedCinema);
  } catch (error) {
    next(error);
  }
};

// DELETE /cinemas/:id (Delete a cinema by ID)
exports.delete = async (req, res, next) => {
  try {
    const nbDeleted = await Cinema.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.sendStatus(nbDeleted ? 204 : 404);
  } catch (error) {
    next(error);
  }
};
