const Manager = require("../lib/Manager");
const Employee = require("./Employee");
const employee = new Employee(id, name, email,office);
const id = 456;
const name = "fhf";
const email = "th";
const office = 1;

describe("Manager", () => {
    it('should return an object containing basic employee information when called with the "new" keyword', () => {

       
    });
    it('take in an office number with getOffice method', () => {

        expect(employee.getId()).toBe(456);
    });
    it('take in a name with getName method', () => {
 
        expect(employee.getName()).toBe('fhf');
    });
    it('take in an email with getEmail method', () => {

        expect(employee.getEmail()).toBe('th');
    });
});

