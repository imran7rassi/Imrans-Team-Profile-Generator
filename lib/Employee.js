
// adding the class for employee
// adding properties for this class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
// these will return the data for each child class

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;