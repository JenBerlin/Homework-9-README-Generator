// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    // Title of the project
    // What is the description?
    // Table contents
    // Installation
    // ...
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
      writeToFile("README-1.md", markdownString);
      console.log(markdownString);
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
