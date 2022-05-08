const Warehouses = require("../db/models/Warehouse");
exports.getAllWarehouses = async (req, res, next) => {
  try {
    const warehouses = await Warehouses.findAll();
    res.render("pages/warehouses", {
      data: warehouses,
      title: "List of all warehouses",
    });
  } catch (e) {
    next(e);
  }
};

exports.getAddNewWarehouse = (req, res) => {
  res.render("pages/addwarehouse", {
    title: "New warehouse",
  });
};
