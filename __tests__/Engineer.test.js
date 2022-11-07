

// Import Engineer class //

const Engineer = require("../lib/Engineer");

// test for creating the github //

test("Can create a github.", () => {
    const testGithub = "Alex";
    const employeeInstance = new Engineer("Alex", 2, "alex.12@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

// test of returning the github account //
test("Testing getGithub will return github.", () => {
    const testGithub = "Alex";
    const employeeInstance = new Engineer("alex", 2, "alex.12@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

// tsetinf the Role //
test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Alex", 2, "alex.12@gmail.com", "GitHubUser");
    expect(employeeInstance.getRole()).toBe(returnValue);
});