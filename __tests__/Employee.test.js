const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");


describe("Employee", () => {
it('should return an object containing basic employee information when called with the "new" keyword', () => {
    const employee = new Employee('2525','belen','dinno@gjgj.com');
    expect(employee.id).toBe(2525);
    expect(employee.name).toBe("belen");
    expect(employee.email).toBe("dinno@gjgj.com");
});
test('confirm the getId method works',()=>{
expect(employee.getId()).toBe('2525');
});
test('confirm the getName method works',()=>{
expect(employee.getName()).toBe('belen');
});
test('confirm the getEmail method works',()=>{
expect(employee.getEmail()).toBe('dinno@gjgj.com');
});

});
