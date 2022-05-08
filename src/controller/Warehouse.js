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

exports.postAddNewWarehouse = async (req, res, next) => {
  try {
    const newWarehouse = Warehouses.build(req.body);
    await newWarehouse.validate();
    await newWarehouse.save();
    res.redirect("/warehouses");
  } catch (e) {
    next(e);
  }
};

exports.deleteWarehouse = async (req, res, next) => {
  try {
    if (req.query.id) {
      await Warehouses.destroy({ where: { id: req.query.id } });
    }
    res.redirect("/warehouses");
  } catch (e) {
    res.status(500).json(e);
  }
};
