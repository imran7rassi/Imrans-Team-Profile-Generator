
// Import Employee class from Employee file

const Employee = require("../lib/Employee");

// test for creating an new employee //
test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

// test for set a name //
test("Can set name via arguments", () => {
    const name = "Ahmad";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

// test for the ID //
test("Testing ID.", () => {
    const id = 4;
    const employeeInstance = new Employee("Ahmad", id);
    expect(employeeInstance.id).toBe(id);
})


// test for email through the constructor arguments //
test("Can set email via argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Ahmad", 1, testValue);
  expect(e.email).toBe(testValue);
});

// test for name via getname //
test("Can get name via getName()", () => {
  const testValue = "Ahmad";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

// test for getting id via getid //
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("", testValue);
  expect(e.getId()).toBe(testValue);
});

// test for getting email via getemail //
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 4, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// tset for getRole //
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Ahmad", 4, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});