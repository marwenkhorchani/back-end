module.exports = new (class classtService {
  constructor() {
    this.class = require("../models/class.model.js");
  }
  getClass() {
    return this.class.find();
  }
  deleteClassById({ _id }) {
    return this.class.findByIdAndDelete(_id);
  }
  updateClassById(_id, payload) {
    return this.class.findByIdAndUpdate(_id, payload);
  }
  getClassById({ _id }) {
    return this.class.findById(_id);
  }
  addClass(payload) {
    return this.class.create(payload);
  }
})();
