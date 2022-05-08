const WagonTypeModel = require("../db/models/WagonType");

exports.getWagonTypes = async (req, res, next) => {
  try {
    const wagonTypes = await WagonTypeModel.findAll();
    res.render("pages/wagontypes", {
      data: wagonTypes,
      title: "List of all wagon types",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.getAddNewWagonType = (req, res, next) => {
  res.render("pages/addwagontype", { title: "New Wagon Type" });
};

exports.postAddNewWagonType = async (req, res, next) => {
  try {
    console.log(req.body);
    const newWagonType = WagonTypeModel.build(req.body);
    await newWagonType.validate();
    await newWagonType.save();
    res.redirect("/wagon-types");
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.deleteWagonType = async (req, res, next) => {
  try {
    if (req.query.id) {
      await WagonTypeModel.destroy({ where: { id: req.query.id } });
    }
    res.redirect("/wagon-types");
  } catch (e) {
    res.status(500).json(e);
  }
};
