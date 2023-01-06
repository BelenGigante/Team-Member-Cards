const Intern = require("../lib/Intern");
const id = 456;
const name = "fhf";
const email = "th";
const school= "uncc"

describe("Intern", () => {
    it('should return an object containing basic employee information plus school when called with the "new" keyword', () => {

        const intern = new Intern(id, name, email,school);
        expect(intern.id).toBe(456);
        expect(intern.name).toBe("fhf");
        expect(intern.email).toBe("th");
        expect(intern.school).toBe("uncc");
    });
    it('take in a school username with getGithub method', () => {
        const intern = new Intern(id, name, email,school);
        expect(intern.getSchool()).toBe("uncc");
    });
});
