

// Instead of adding single properties for Intern class
// we can use the default properties from employee that are valid

const Employee = require("./Employee");

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

// But the manager class also have the officenumber & getRole property 

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}