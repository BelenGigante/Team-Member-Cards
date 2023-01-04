const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({ name,id,position, email, github,school,office }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ENTER PAGE TITLE HERE</title>
  <!-- Minified version -->
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    <article>
      <h2>${position}</h2>
      <ul>
        <li>Name: ${name}</li>
        <li>ID: ${id}</li>
        <li>Email: ${email}</li>
        <li>Office Number: ${office}</li>
      </ul>
    </article>
    <article>
      <h2>position</h2>
      <ul>
        <li>ID: 2</li>
        <li>Email: engineer@email.com</li>
        <li>GitHub: ${github}<a href="#github">person</a></li>
      </ul>
    </article>
    <article>
      <h2>Intern</h2>
      <ul>
        <li>ID: 3</li>
        <li>Email: intern@email.com</li>
        <li>School: ${school}</li>
      </ul>
    </article>
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>`;


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
    const htmlPageContent = generateHTML(data);
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
})