const Employee = require("./Employee");

class Manager extends Employee {
    constructor(Employee,office) {
        this.Employee;
        this.office = office;
      }
    getEmployee(){

    }
    getOffice(){

    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
