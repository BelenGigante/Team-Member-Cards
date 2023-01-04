const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = ({name,id,email,position,office,school,github})


inquirer.prompt([
    {
        type: 'input',
        message: 'Enter name: ',
        name: 'name',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter name to continue' } }
    },
    {
        type: 'input',
        message: 'Enter Id: ',
        name: 'id',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter Id to continue' } }
    },
    {
        type: 'input',
        message: 'Enter e-mail: ',
        name: 'email',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter e-mail to continue' } }
    },
    {
        type: 'list',
        message: 'Position : ',
        choices: ['Manager', 'Intern', 'Engineer'],
        name: 'position',
        
    },

]).then((data) => {
    if (`${data.position}` === 'Manager') {
        inquirer.prompt({
            type: 'input',
            message: 'Enter office number: ',
            name: 'office',
            validate: (notBlank) => { if (notBlank) { return true } else { return 'enter office number to continue' } }
        })
    } if (`${data.position}` === 'Intern') {
        inquirer.prompt({
            type: 'input',
            message: 'Enter school: ',
            name: 'school',
            validate: (notBlank) => { if (notBlank) { return true } else { return 'enter school to continue' } }
        })
    
    }if (`${data.position}` === 'Engineer') {
        inquirer.prompt({type: 'input',
        message: 'Enter GitHub username: ',
        name: 'github',
        validate: (notBlank) => { if (notBlank) { return true } else { return 'enter username to continue' } }})
    }
})