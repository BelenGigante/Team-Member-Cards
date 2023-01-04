const Employee = require("../lib/Employee");

const id = 456;
const name = "fhf";
const email = "th";

describe("Employee", () => {
    it('should return an object containing basic employee information when called with the "new" keyword', () => {

        const employee = new Employee(id, name, email);
        expect(employee.id).toBe(456);
        expect(employee.name).toBe("fhf");
        expect(employee.email).toBe("th");
    });
    it('take in an id with getId method', () => {
        const employee = new Employee(id, name, email);
        expect(employee.getId()).toBe(456);
    });
    it('take in a name with getName method', () => {
        const employee = new Employee(id, name, email);
        expect(employee.getName()).toBe('fhf');
    });
    it('take in an email with getEmail method', () => {
        const employee = new Employee(id, name, email);
        expect(employee.getEmail()).toBe('th');
    });

});
