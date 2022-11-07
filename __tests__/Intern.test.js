

// Import the Intern class //

const Intern = require("../lib/Intern");

// test to set the school //
test("Can set school", () => {
  const testValue = "GT";
  const e = new Intern("Lisa", 3, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});


// test to getRole //

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Lisa", 1, "test@test.com", "GT");
  expect(e.getRole()).toBe(testValue);
});

// test set school via getschool //

test("Can get school via getSchool()", () => {
  const testValue = "GT";
  const e = new Intern("Lisa", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});