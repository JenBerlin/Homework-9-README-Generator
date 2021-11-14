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
    type: "password",
    message: "What is your password?",
    name: "description",
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
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
