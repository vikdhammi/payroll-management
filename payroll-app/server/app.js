module.exports = function(app) {

    var models = require("./model/models.server")();

    require("./services/employee.service.server")(app, models);
};