const Events = require("../db/models/Event");
const WagonModel = require("../db/models/Wagon");
const WarehouseModel = require("../db/models/Warehouse");
exports.getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.findAll();
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
