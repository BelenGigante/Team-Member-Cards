const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const renderHtml = require('./src/page-template');
const team = [];

function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter Manager's name: ",
            name: 'name',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter manager name to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter Id: ',
            name: 'id',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter Id to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter e-mail: ',
            name: 'email',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter e-mail to continue' }
            }
        },
        {
            type: 'input',
            message: 'Office number : ',
            name: 'officeNumber',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter office number to continue' }
            }

        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            team.push(manager);
            createEmployee();
        });
}
const createEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'choose a position: ',
            name: 'position',
            choices: ['Intern', 'Engineer', 'no more employees'],
        }
    ])
        .then(data => {
            switch (data.position) {
                case 'Intern':
                    internInfo();
                    break;
                case 'Engineer':
                    engineerInfo();
                    break;
                case 'no more employees':
                    const teamData = renderHtml(team);
                    fs.writeFile('./src/index.html', teamData, (err) =>
                        err ? console.log(err) : console.log('html generated'));
                    break;
            }
        })

}
function internInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter Inter's name: ",
            name: 'name',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter intern name to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter Id: ',
            name: 'id',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter Id to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter e-mail: ',
            name: 'email',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter e-mail to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter school: ',
            name: 'school',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter school to continue' }
            }
        },
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        team.push(intern);
        createEmployee();
    });
};
function engineerInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter Engineer's name: ",
            name: 'name',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter engineer name to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter Id: ',
            name: 'id',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter Id to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter e-mail: ',
            name: 'email',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter e-mail to continue' }
            }
        },
        {
            type: 'input',
            message: 'Enter GitHub: ',
            name: 'github',
            validate: (answer) => {
                if (answer !== " ") { return true }
                else { return 'enter github to continue' }
            }
        },
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        team.push(engineer);
        createEmployee();
    });
};


// .then((data) => {

//     if (`${data.position}` === 'Manager') {
//         inquirer.prompt({
//             type: 'input',
//             message: 'Enter office number: ',
//             name: 'office',
//             validate: (answer) => { if (answer !== " ") 
//             { return true } 
//             else { return 'enter office number to continue' } }
//         })
//     } if (`${data.position}` === 'Intern') {
//         inquirer.prompt({
//             type: 'input',
//             message: 'Enter school: ',
//             name: 'school',
//             validate: (notBlank) => { if (notBlank) { return true } else { return 'enter school to continue' } }
//         })

//     }if (`${data.position}` === 'Engineer') {
//         inquirer.prompt({type: 'input',
//         message: 'Enter GitHub username: ',
//         name: 'github',
//         validate: (notBlank) => { if (notBlank) { return true } else { return 'enter username to continue' } }})
//     }
//     const htmlPageContent = generateHTML(data);
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// })
managerInfo();
