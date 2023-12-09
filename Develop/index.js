const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'

    },
    {
        type: 'input',
        name: 'install',
        message: 'Please describe any installation instructions.'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe any usage information.'

    },
    {
        type: 'input',
        name: 'test',
        message: 'Please describe any testing instructions.'

    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please describe and contributing guidelines.'

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your license information for this application:',
        choices: ['none',
        'Academic Free License v3.0', 
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'BSD 3-clause Clear license',
        'BSD 4-clause "Original" or "Old" license',
        'BSD Zero-Clause license',
        'Creative Commons license family',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU Lesser General Public License family',
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'Open Software License 3.0',
        'PostgreSQL License',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License'
        ],

    },
];

// This function writes the README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, 
    (err) => err ? console.error(err) : console.log(`README.md has been generated.`))
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
