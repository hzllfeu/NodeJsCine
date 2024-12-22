const Review = require("../models/reviews");

exports.cget = async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.post = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

exports.patch = async (req, res, next) => {
  try {
    const [nbUpdate] = await Review.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
      individualHooks: true,
    });

    if (nbUpdate === 0) {
      return res.sendStatus(404);
    }

    const updatedReview = await Review.findByPk(parseInt(req.params.id));
    res.json(updatedReview);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const nbDeleted = await Review.destroy({
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
    const review = await Review.findByPk(parseInt(req.params.id));
    res.status(review ? 200 : 404).json(review);
  } catch (error) {
    next(error);
  }
};