const inquirer = require("inquirer");
const mysql = require('mysql2');

// connect to database
const company_db = mysql.createConnection(
    {
      host: 'localhost',
      // mySQL username,
      user: 'root',
      // mySQL password
      password: '',
      database: 'company_db'
    },
    console.log('')
  );
  

// view options
const optionsQ = [
    {
        type: 'list',
        message: "Select an option from the menu",
        choices: ["View departments", "View roles", "View employees", "Add a new department", "Add a new role", "Add a new employee", "Update an employee's job title"],
        name: 'menuOptions', 
    },
]

const departmentQ = [
    {
        type: 'input', 
        message: 'What is the new department name?',
        name: 'newDepartment', 
    },
]

const roleQ = [
    {
        type: 'input', 
        message: 'What is the title of this new role?',
        name: 'roleTitle',
    },
    {
        type: 'input', 
        message: 'What is the salary?',
        name: 'roleSalary'
    },
    {
        type: 'input',
        message: 'Enter the department ID',
        name: 'roleID'
    },
]

const employeeQ = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName',
    },
    {
        type: 'input',
        message: "What is the employee's last name?",
        name: 'lastName',
    },
    {
        type: 'input',
        message: "What is the employee's job title?",
        name: 'jobTitle',
    },
    {
        type: 'input',
        message: "What is the employee's manager ID?",
        name: 'managerId',
    }
]

const updateQ = [
    {
        type: 'input', 
        message: "What is the employee's new job title?",
        name: 'updateTitle'
    }
]


// prompts 
const firstQuestion = () => {
    return inquirer 
        .prompt(optionsQ)
        .then((data) => {
           if (data.menuOptions == "Add a new department") {
               addDepartment(); 
           }
 });
}

const addDepartment = () => {
    return inquirer 
        .prompt(departmentQ)
        .then((data) => {
        // query for DEPARTMENT (to add this new data into the database)
            company_db.query(`INSERT INTO department( department_name) VALUES ("${data.newDepartment}")`, (err,result) => {
                if (err) {
                console.log(err)
                }
                console.log('')
            });
        })
}

firstQuestion(); 
