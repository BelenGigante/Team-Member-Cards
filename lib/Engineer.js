const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(Employee, github){
        this.Employee = Employee;
        this.github = github;
    }
    getGithub(){

    }
    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
