
// Import files from the current files //
// to generate them into tthe index.js //

// import the npm packages //
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// Import the classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Output Directory
const DIST_DIR = path.resolve(__dirname, 'dist');
// Output file path and name
const outputPath = path.join(DIST_DIR, 'team.html');
// Import HTML template
const templateHTML = require('./src/template.js');
// Import the email validator //
const emailValidator = require('email-validator');


// adding the team array to select who will be in our team //
teamArray = [];

// adding the fuction to run our app //
// and adding the fucntion to create our team members //
function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What types of employee you would like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more members needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {

        case "Manager":
          addManager();
          break;

        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
}

// adding the questions for creating manager //

function addManager() {
    inquirer.prompt ([

    // questions array include: //
    // name, ID, Email & Office number //

    // adding the name if there is no name inputed return an err //
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager?(Required)',
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's name." }
            },
        },

    // adding the ID if there is no ID inputed return an err //
        {
            type: 'input',
            name: 'managerId',
            message: 'Employee ID of the team manager?(Required)',
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's id." }
            },
        },

    // adding the Email if there is not validated email inputed return an err //
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email address of the team manager?(Required)',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },

    // adding the Office number if there is no Office number inputed return an err //
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the office number of the team manager?(Required)',
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's office number." }
            },
        },
    ])

    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}


// adding the questions for creating manager //
function addEngineer() {
    inquirer
        .prompt([

    // adding the name if there is no name inputed return an err //
        {
            type: 'input',
            name: 'name',
            message: `What is the engineers's name?(Required)`,
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's name." }
            },
        },

    // adding the ID if there is no ID inputed return an err //
        {
            type: 'input',
            name: 'id',
            message: `What is the engineer's employee ID?(Required)`,
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's id." }
            },
        },

    // adding the Email if there is not validated email inputed return an err //
        {
            type: 'input',
            name: 'email',
            message: `What is the engineer's email address?(Required)`,
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },

    // adding the GitHub account if there is no GitHub username inputed return an err //
        {
            type: 'input',
            name: 'gitHub',
            message: `What is the engineer's github profile name?(Required)`,
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub." }
            },
        },

    ])
        .then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();

    });

  }
