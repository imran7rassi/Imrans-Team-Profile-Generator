
// Instead of adding single properties for Engineer class
// we can use the default properties from employee that are valid

const Employee = require("./Employee");

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

// But the Engineer class also have the github & getRole property

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
