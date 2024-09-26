var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    Name: String, 
    Age: Number, 
    Dept: String, 
    Sal: String
})
var EmployeeModel = mongoose.model("employee", Schema);
module.exports = EmployeeModel
