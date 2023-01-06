const Engineer = require("../lib/Engineer");
const id = 456;
const name = "fhf";
const email = "th";
const github = "bgigante"

describe("Engineer", () => {
    it('should return an object containing basic employee information plus github when called with the "new" keyword', () => {

        const engineer = new Engineer(id, name, email,github);
        expect(engineer.id).toBe(456);
        expect(engineer.name).toBe("fhf");
        expect(engineer.email).toBe("th");
        expect(engineer.github).toBe("bgigante");
    });
    it('take in a github username with getGithub method', () => {
        const engineer = new Engineer(id, name, email,github);
        expect(engineer.getGithub()).toBe("bgigante");
    });
});
