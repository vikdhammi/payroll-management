module.exports = function() {

var mongoose = require("mongoose");
var EmployeeSchema = require("./employee.schema.server")();
var Employee = mongoose.model("Employee", EmployeeSchema);

var api = {
    getAllEmployees : getAllEmployees,
    getEmployeeById : getEmployeeById,
     updateEmployee : updateEmployee,
     deleteEmployee : deleteEmployee,
    createEmployee : createEmployee
};

return api;

function deleteUser(userId) {
    return Employee.remove({_id : employeeId});
}

function getAllEmployees() {
    return Employee.find();
}

function createEmployee(employee) {
    console.log("In emp model serber");
    return Employee.create(employee);
}

function getEmployeeById(employeeId) {
    return Employee.findById({ _id : employeeId});
}

function updateEmployee(employeeId, employee) {
    delete employee._id;
    
    return Employee
        .update({_id : employeeId}, {
            $set: {
                firstName : employee.firstName,
                lastName : employee.lastName,
                email : employee.email,
                baseSal : employee.baseSal,
                medical : employee.medical,
                tax : employee.tax,
                finalSal : employee.baseSal - employee.medical - employee.tax
            }
        });
}

function deleteEmployee(employeeId){
    return Employee.remove({_id : employeeId});
}

};