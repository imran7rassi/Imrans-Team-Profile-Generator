

// Creating the different team cards //

const generateTeam = team => {

    // create the manager card and the data input //
    const generateManager = manager => {
        return `
        
    <div class="card-header text-center">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>

    <!-- Manager's properties -->

    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
    `;
 };


     // create the Engineer card and data input for it //
     const generateEngineer = engineer => {

        return `

    </div><div class="card employee-card mr-4 ml-4 mb-3">
    <div class="card-header text-center">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>

    <!-- Enginner's properties -->

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                    rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
    </div>
   `;
  };

      
  // create the Intern card and data input for it //

    const generateIntern = intern => {
        return `
        <div class="card employee-card mr-4 ml-4 mb-3">
        <div class="card-header text-center">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
    
    <!-- Intern's properties -->
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
  `;
 };



 // Join and render the HTML //

 // Creating an empty array for HTML card //

 const html = [];

// Adding the manager to the empty array of HTML card //

html.push(team
     .filter(employee => employee.getRole() === "Manager")
     .map(manager => generateManager(manager))
 );


// Adding the Engineer to the empty array of HTML card //
 html.push(team
     .filter(employee => employee.getRole() === "Engineer")
     .map(engineer => generateEngineer(engineer))
     .join("")
 );


 // Adding the Intern to the empty array of HTML card //
 html.push(team
     .filter(employee => employee.getRole() === "Intern")
     .map(intern => generateIntern(intern))
     .join("")
 );


 // Return the Completed HTML //
 return html.join("");

};

// Creating the main HTML //
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Our Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <!-- adding the first header -->
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="team-profile-header col-12 mb-3 team-profile jumbotron">
                    <h1 class="team-profile-title text-center"> My Team </h1>
                </div>
            </div>
        </div>
    
        <div class="container">
    
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center mt-5">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html> 

  `;

};


