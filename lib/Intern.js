const Employee = require("./Employee");

class Intern extends Employee {
    constructor(Employee, school){
        this.Employee = Employee;
        this.school=school;
    }
    getSchool(){

    }
    getRole(Intern){
        return Intern;
    }
}

module.exports = Intern;
