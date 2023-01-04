const Employee = require("./Employee");

class Manager extends Employee {
    constructor(Employee, email,office) {
        this.office = office;
      }
}

module.exports = Manager;
