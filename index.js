const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'userName',
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
        message: 'How do you install it?',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },
    
    {
        type: 'input',
        message: 'Which license are you using?',
        name: 'license'
    }

];


function init() {

    

inquirer.prompt(questions).then(answers => {
    const readmeContent = `
# ${answers.title}

##Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}


## Contributing
${answers.userName}
${answers.email}

## License
${answers.license} `;

   fs.writeFile('README.md', readmeContent, (err) => {
       if (err) throw err;
       console.log('README.md has been generated!');
   });
});
}
       

      

init();





