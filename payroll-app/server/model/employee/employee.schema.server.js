module.exports = function() {
    var mongoose = require("mongoose");

    var EmployeeSchema = mongoose.Schema ({
        firstName : String,
        lastName : String,
        email : String,
        baseSal : Number,
        medical : Number,
        tax : Number,
        finalSal : Number 
    });

    return EmployeeSchema;
}