const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const db = require(".");

const connection = mysql.createConnection({
  host: "localhost",

  // Your username
  user: "root",
  
  port: 3306,
  // Your password
  password: "walkerwatt",

  database: "employee_info_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  startScreen();
  //  go to start screen
});

//What the user will first see 
function startScreen() {
  inquirer
    // list of options 
    .prompt({
      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "option"
    })
    .then(function(result) {
      console.log("You entered: " + result.option);

      // switch case that has corresponding functions
      switch (result.option) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
      }
    });
}


// creates a department
function addDepartment() {


    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"

    }).then(function(answer){



        connection.query(`INSERT INTO department (dep_name) VALUES (?)`, [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            startScreen()
    })
    })
}


// adds a role 
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID"
      }
    ])
    .then(function(answer) {


      connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
      });
    });
}

// adds an employee 
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "firstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "lastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "confirm",
        message: "Is this employee a manager?",
        name: "isManager"
      },
      {
        type: "input",
        message: "What is the Manager's id number?",
        name: "managerID",
        when(answer) {
          return answer.isManager;
        }
      }
    ])
    .then(function(answer) {

      
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
      });
    });
}

// updates an employees role id 
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "Update"
      },

      {
        type: "input",
        message: "What do you want to update to?",
        name: "updateRole"
      }
    ])
    .then(function(answer) {
      connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.Update],function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
      });
    });
}

function viewDepartment() {
  // select and show department in a table from the db
  let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
 
}

function viewRoles() {
  // select and show roles in a table from the db
  let query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
 
}

function viewEmployees() {
  // select and show employee in a table from the db
  let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
 
}

function quit() {
  connection.end();
  process.exit();
}