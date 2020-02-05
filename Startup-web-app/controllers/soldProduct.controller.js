const soldProduct = require("../models/soldProduct.model");
const historyController = require("./budget.controller");

const createsoldProduct = async (req, res, next) => {
  try {
    const data = await soldProduct.create(req.body);
    historyController.addHistory({ ...req.body, id: data._id }, false);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const getsoldProducts = async (req, res, next) => {
  try {
    const data = await soldProduct.find({});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updatesoldProduct = async (req, res, next) => {
  try {
    const newItem = await soldProduct.findByIdAndUpdate(
      req.params.soldProductId,
      req.body,
      {
        new: true,
        useFindAndModify: false
      }
    );
    if (!newItem) return res.sendStatus(404);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
};

const deletesoldProduct = async (req, res, next) => {
  try {
    const deleted = await soldProduct.findByIdAndDelete(
      req.params.soldProductId
    );
    if (!deleted) return res.status(404).json({ message: "Internal error" });
    res.redirect("back");
    historyController.deleteHistory(req.params.soldProductId);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createsoldProduct,
  deletesoldProduct,
  updatesoldProduct,
  getsoldProducts
};
