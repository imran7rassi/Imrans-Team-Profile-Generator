

// Import the Manager class //

const Manager = require("../lib/Manager");

// test to create an office number //
test("create an office number.", () => {
    const testOfficeNumber = 13;
    const employeeInstance = new Manager("Imran", 2, "imran.rassi.2020@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

// test to return the office number //

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 13;
    const employeeInstance = new Manager("Imran", 2, "imran.rassi.2020@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

// testing the Role //
test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Imran", 2, "imran.rassi.2020@gmail.com", 13);
    expect(employeeInstance.getRole()).toBe(returnValue);
});