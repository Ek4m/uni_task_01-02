const { getAllWarehouses } = require("../controller/Warehouse");

const Route = require("express").Router();

Route.get("/", getAllWarehouses);

module.exports = Route;
