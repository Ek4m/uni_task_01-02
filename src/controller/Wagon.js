const TrainModel = require("../db/models/Train");
const Wagons = require("../db/models/Wagon");
const WagonTypeModel = require("../db/models/WagonType");

exports.getWagons = async (req, res, next) => {
  try {
    const wagons = await Wagons.findAll({
      include: [{ model: WagonTypeModel }, { model: TrainModel }],
    });
    res.render("pages/wagons", {
      data: wagons,
      title: "List of all wagons",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.getAddNewWagon = async (req, res, next) => {
  try {
    const wagonTypes = await WagonTypeModel.findAll();
    const trains = await TrainModel.findAll();
    res.render("pages/addwagon", {
      wagonTypes,
      trains,
      title: "New wagon",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.postAddNewWagon = async (req, res, next) => {
  try {
    const newWagon = Wagons.build(req.body);
    await newWagon.validate();
    await newWagon.save();
    res.redirect("/wagons");
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

exports.deleteWagon = async (req, res, next) => {
  try {
    if (req.query.id) {
      await Wagons.destroy({
        where: {
          id: req.query.id,
        },
      });
    }
    res.redirect("/wagons");
  } catch (e) {
    res.status(500).json(e);
  }
};
