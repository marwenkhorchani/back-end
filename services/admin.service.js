module.exports = new (class AdminService {
  constructor() {
    this.admin = require("../models/admin.model.js");
  }

  getAdmin(payload) {
    return this.admin.find({
      username: payload.username
      
    });
    
  }
})();
