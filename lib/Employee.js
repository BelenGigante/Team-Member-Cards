
class Employee {
    constructor(id,name,email,role){
        this.id = id;
        this.name = name;
        this.email=email;
        this.role= 'Employee';
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }

}


module.exports = Employee;
