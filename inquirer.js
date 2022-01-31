const inquirer = require("inquirer");

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
               departmentQuestion(); 
           }
 });
}

const departmentQuestion = () => {
    return inquirer 
        .prompt(departmentQ)
        .then((data) => {
            console.log(data.newDepartment); 
        })
}

firstQuestion(); 