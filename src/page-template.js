// create the team
const generateTeamMembers = (team) => {
  return `
<!DOCTYPE html>
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
  <div class="text-center p-3 mb-2 bg-info text-dark"> My Team</div>
        <div>
        <div class="row">
        ${team}
        </div>
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>`
};

const renderManag = (managerInfo) => {
  return ` 
<div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">Manager</h5>
      <h6 class="card-subtitle mb-2 text-muted">${managerInfo.name}</h6>
      <p class="card-text">ID: ${managerInfo.id}</p>
      <p>Email: <a href="mailto:${managerInfo.email}"> ${managerInfo.email}</a> </p>
      <p class="card-text">Office Number: ${managerInfo.officeNumber}</p>
      </div>
    </div>`
}
const renderEng = (engineerInfo) => {
  return ` 
<div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">Engineer</h5>
      <h6 class="card-subtitle mb-2 text-muted">${engineerInfo.name}</h6>
      <p class="card-text">ID: ${engineerInfo.id}</p>
      <p>Email: <a href="mailto:${engineerInfo.email}"> ${engineerInfo.email}</a> </p>
      <p class="card-text">GutHub User: ${engineerInfo.github}</p>
      </div>
    </div>`
}
const renderInt = (internInfo) => {
  return ` 
<div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col">
      <h5 class="card-title">Intern</h5>
      <h6 class="card-subtitle mb-2 text-muted">${internInfo.name}</h6>
      <p class="card-text">ID: ${internInfo.id}</p>
      <p>Email: <a href="mailto:${internInfo.email}"> ${internInfo.email}</a> </p>
      <p class="card-text">School Name: ${internInfo.school}</p>
      </div>
    </div>`
}
const renderHtml = (team) => {
  const employees = [];
  for (var i = 0; i < team.length; i++) {
    const workers = team[i];
    const position = workers.getRole();

    if (position === 'Manager') {
      const managerSection = renderManag(workers)
      employees.push(managerSection)
    }
    if (position === 'Engineer') {
      const engineerSection = renderEng(workers)
      employees.push(engineerSection)
    }
    if (position === 'Intern') {
      const internSection = renderInt(workers)
      employees.push(internSection)
    }
  }


const employeeTeam = employees;
const employeeInfo = generateTeamMembers(employeeTeam)
return employeeInfo; 
}

// export function to generate entire page
// module.exports = (team) => {
//     // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE


// };
module.exports = renderHtml