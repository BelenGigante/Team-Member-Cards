const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        message: 'Enter name: ',
        name: 'name',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter title to continue' } }
    },
    {
        type: 'input',
        message: 'Enter Id: ',
        name: 'id',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter title to continue' } }
    },
    {
        type: 'input',
        message: 'Enter school: ',
        name: 'school',
    },
    {
        type: 'input',
        message: 'Enter e-mail: ',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter office number: ',
        name: 'office',
    },
    {
        type: 'input',
        message: 'Enter GitHub username: ',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Position : ',
        choices: ['Employee', 'Manager', 'Intern', 'Engineer'],
        name: 'position',
    },
    {
        type: 'input',
        message: 'Username (Github): ',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'E-mail: ',
        name: 'eMail',
    },

])