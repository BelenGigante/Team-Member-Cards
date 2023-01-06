const Manager = require("../lib/Manager");
const id = 456;
const name = "fhf";
const email = "th";
const officeNumber = 1;


describe("Manager", () => {
    it('should return an object containing basic employee information plus officeNumber when called with the "new" keyword', () => {

        const manager = new Manager(name,id,email,officeNumber);
        expect(manager.name).toBe(456);
        expect(manager.id).toBe("fhf");
        expect(manager.email).toBe("th");
        expect(manager.officeNumber).toBe(1);
       
    });
    it('take in an office number with getOffice method', () => {
        const manager = new Manager(name,id,email,officeNumber);
        expect(manager.getOfficeNumber()).toBe(1);
    });
   
});

