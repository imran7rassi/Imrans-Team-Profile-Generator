
// Instead of adding single properties for Intern class
// we can use the default properties from employee that are valid

const Employee = require("./Employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

// But the Intern class also have the getSchool & getRole property

    getSchool() {
        return this.school;

    }

    getRole() {
        return "Intern";
    }
}