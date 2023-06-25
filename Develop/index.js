// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "Enter the title of your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPL v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0",
            "Creative Commons Zero v1.0 Universal",
            "The Unlicense",
            "Eclipse Public License 2.0",
            "GNU AGPL v3",
            "GNU LGPL v3",
          ],
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
