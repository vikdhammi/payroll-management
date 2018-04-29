module.exports = function() {
    var models = {
        employeeModel : require("./employee/employee.model.server")()
    };

    return models;
};