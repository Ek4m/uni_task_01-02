const Events = require("../db/models/Event");
const WagonModel = require("../db/models/Wagon");
const WarehouseModel = require("../db/models/Warehouse");
exports.getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.findAll({
      include: [{ model: WarehouseModel }, { model: WagonModel }],
    });
    res.render("pages/events", {
      data: events,
      title: "All events",
    });
  } catch (e) {
    next(e);
  }
};

exports.getAddNewEvent = async (req, res, next) => {
  try {
    const wagons = await WagonModel.findAll();
    const warehouses = await WarehouseModel.findAll();
    res.render("pages/addevent", {
      wagons,
      warehouses,
      title: "New Event",
    });
  } catch (e) {
    next(e);
  }
};

exports.postAddNewEvent = async (req, res, next) => {
  try {
    const newEvent = Events.build(req.body);
    await newEvent.validate();
    await newEvent.save();
    res.redirect("/events");
  } catch (e) {
    next(e);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    if (req.query.id) {
      await Events.destroy({ where: { id: req.query.id } });
    }
    res.redirect("/events");
  } catch (e) {
    res.status(500).json(e);
  }
};
