const Ann = require("../models/announcement.model.js");

module.exports.getAnnouncements = function () {
  return Ann.find();
};

module.exports.deleteById = function (id) {
  return Ann.findByIdAndDelete(id);
};
