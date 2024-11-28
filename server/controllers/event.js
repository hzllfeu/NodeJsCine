const Event = require("../models/event");  

exports.cget = async (req, res, next) => {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      next(error);
    }
  };

exports.post = async (req, res, next) => {
    try {
      const newEvent = await Event.create(req.body);
      res.status(201).json(newEvent);
    } catch (error) {
      next(error);
    }
  };
  
exports.patch = async (req, res, next) => {
    try {
      const [nbUpdate] = await Event.update(req.body, {
        where: {
          id: parseInt(req.params.id),
        },
        individualHooks: true,
      });
  
      if (nbUpdate === 0) {
        return res.sendStatus(404);
      }
  
      const updatedEvent = await Event.findByPk(parseInt(req.params.id));
      res.json(updatedEvent);
    } catch (error) {
      next(error);
    }
  };
  
exports.delete = async (req, res, next) => {
    try {
      const nbDeleted = await Event.destroy({
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
      const event = await Event.findByPk(parseInt(req.params.id));
      res.status(event ? 200 : 404).json(event);
    } catch (error) {
      next(error);
    }
  };