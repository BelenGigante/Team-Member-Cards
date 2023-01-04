const Employee = require("./Employee");

class Manager extends Employee {
    constructor(Employee,office) {
        this.Employee = Employee;
        this.office = office;
      }
    getEmployee(){
        return this.Employee;

    }
    getOffice(){
        return this.office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
