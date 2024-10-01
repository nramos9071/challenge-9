// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
let response = []


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',

    },
    {
        type: 'input',
        message:'Please describe your project.',
        name: 'description',
    }

  
];


// TODO: Create a function to write README file
function writeToFile() {



    

   fs.writeFile('README.md', response, (err) => {
    err ? console.error(err) : console.log('README Created!')
    })

};

function init() {

inquirer
    .prompt(questions)
    .then((response) => 
    console.log(response));
 
    

// TODO: Create a function to initialize app

};
// Function call to initialize app
init();
// writeToFile();
