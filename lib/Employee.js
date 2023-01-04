class Employee {
    constructor(id,name,position,email){
        this.id = id;
        this.name = name;
        this.position= position;
        this.email=email;
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){
        return `'Employee'`
    }

}

module.exports = Employee;
