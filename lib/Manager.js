const Employee = require("./Employee");

class Manager extends Employee {
    constructor(Employee) {
        this.Employee = Employee;
        this.office = uuidv4;
        this.office = Math.floor(Math.random() * 10) + 1;
      }
}

module.exports = Manager;
