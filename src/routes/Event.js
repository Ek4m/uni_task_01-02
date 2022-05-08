const { getAllEvents, getAddNewEvent } = require("../controller/Event");

const Route = require("express").Router();

Route.get("/", getAllEvents);
Route.get("/add", getAddNewEvent);

module.exports = Route;
