// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const  generateMarkdown  = require('./generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'user-name',
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email',
    },
    
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',

    },
    {
        type: 'input',
        message:'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Which license are you using?',
        name: 'license'
    }

  
];


// TODO: Create a function to write README file
function writeToFile() {

    fs.writeFile('README.md', JSON.stringify(response), (err) => {
    err ? console.error(err) : console.log('README Created!')
    })

};

function init() {

    

inquirer
    .prompt(questions)
    .then(response => {

        fs.writeFile('README.md', JSON.stringify(response), (err) => {
            err ? console.error(err) : console.log('README Created!')
            })
    })
    // .then(generateMarkdown)

        

      

// TODO: Create a function to initialize app

};
// Function call to initialize app
init();



