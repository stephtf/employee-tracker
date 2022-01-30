const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  console.log(`Connected to the company_db database.`)
);

// variables for DEPARTMENT 
// const newDepartment = `"${departmentInput}""`;

// query for DEPARTMENT 
// company_db.query(`INSERT INTO department( department_name) VALUES (newDepartment)`, (err,result) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// });

// variables for ROLE 
// const newTitle = `"Sales Intern"`;
// const newSalary = `"35000"`;
// const newDepartmentId = `"1"`;


// query for ROLE
// company_db.query(`INSERT INTO role (title, salary, department_id) VALUES (${newTitle}, ${newSalary}, ${newDepartmentId})`, (err, result) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(result)
// });


// variables for EMPLOYEE 
const newFirst = `"Rafael"`; 
const newLast = `"Nadal"`; 
const newRoleId = `"6"`; 
const newManagerId = `"7"`;

// query for EMPLOYEE
company_db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (${newFirst}, ${newLast}, ${newRoleId}, ${newManagerId})`,  
(err,result) => {
  if (err) {
    console.log(err)
  }
  console.log(result)
});

// // default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
