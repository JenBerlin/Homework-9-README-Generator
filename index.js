// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Description of the project:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "guidelines",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "test",
  },
  {
    type: "list",
    message: "Which license is used for the application?",
    name: "license",
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
    ],
  },
  {
    type: "input",
    message: "Your GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Your Email address:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, (error) => {
    error && console.error("error", error);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownString = generateMarkdown(answers);
      writeToFile("README.md", markdownString);
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
