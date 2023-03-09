
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const { title } = require("process");

// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Enter a project description:",
        name: 'description'
    },
    {
        type: 'input',
        message: "Enter installation instructions:",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Enter usage instructions:",
        name: 'usage'
    },
    {
        type: 'list',
        message: "Choose a license for this project:",
        choices: ["Apache", "GNU", "MIT"],
        name: 'license'
    },
    {
        type: 'input',
        message: "Enter instructions for contributing:",
        name: "contributing"
    },
    {
        type: 'input',
        message: "Enter commands for testing the application:",
        name: 'testing'
    },
    {
        type: 'input',
        message: "Enter your GitHub username:",
        name: 'username'
    },
    {
        type: 'input',
        message: "Enter your email:",
        name: 'email'
    }
  ];

// TODO: Create a function to write README file
const generateReadme = ({title, description, installation, usage, license, contributing, testing, username, email}) =>

`## Project Title
${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation  
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
Run the following commands to test the application.
${testing}

## further questions
If any questions, please contact me on GitHub ${username} or email me at ${email}`;

// create a function to write README File
// function writeToFile = data => {

//     let projectTitle = data["Title of Project"];
//     const readmeText = `# ${projectTitle}
    
//     `
// }

 

// TODO: Create a function to initialize app
const init = () => {
    inquirer 
        .prompt(questions)
        .then((answers) => {
            const readmePageContent = generateReadme(answers);
            // console.log(readmePageContent);
            console.log ("Completed");
            generateReadme(answers);

            fs.writeFile('test-readme.md', readmePageContent, (err) => {
                err ? console.error(err) : console.log("README created!");
            })


        })
}

// Function call to initialize app
init();

//why the readme generated has undefined values?