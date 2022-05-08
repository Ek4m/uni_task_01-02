const {
  getAllEvents,
  getAddNewEvent,
  postAddNewEvent,
  deleteEvent,
} = require("../controller/Event");

const Route = require("express").Router();

Route.get("/", getAllEvents);
Route.get("/add", getAddNewEvent);
Route.post("/add", postAddNewEvent);
Route.get("/delete", deleteEvent);

module.exports = Route;
