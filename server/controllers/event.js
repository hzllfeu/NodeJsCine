const Event = require("../models/event");  

exports.cget = async (req, res, next) => {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      next(error);
    }
  };