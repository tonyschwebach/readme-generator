// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  { name: "title", type: "input", message: "Project Title: " },

  { name: "description", type: "input", message: "Description of project: " },

  {
    name: "imgPath",
    type: "input",
    message: "Relative file path of screensnip/gif: ",
  },

  {
    name: "githubUsername",
    type: "input",
    message: "GitHub username for contact/questions: ",
  },

  {
    name: "contactEmail",
    type: "input",
    message: "Email address for contact/questions: ",
  },

  { name: "deployedURL", type: "input", message: "Deployed site URL: " },

  { name: "repoURL", type: "input", message: "GitHub repo URL: " },

  {
    name: "installation",
    type: "input",
    message: "Describe installation instructions: ",
  },

  {
    name: "usage",
    type: "input",
    message: "Describe usage instructions: ",
  },

    {
    name: "credits",
    type: "input",
    message: "Credit notes: ",
  },

  {
    name: "contribution",
    type: "input",
    message: "Describe contribution instructions: ",
  },

  {
    name: "testing",
    type: "input",
    message: "Describe testing instructions: ",
  },

  {
    name: "license",
    type: "list",
    message: "Choose license: ",
    choices: ["MIT","Apache 2.0","None"]
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, "utf8", (err) => {
    err ? console.error(err) : console.log("written to file.");
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("hello world");
  inquirer.prompt(questions).then((response) => {
    writeToFile("README TEST", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
