DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db; 

USE company_db; 

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL, 
    manager_id INT, 
    INDEX (role_id)
); 

CREATE TABLE role ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL, 
    department_id INT NOT NULL, 
    FOREIGN KEY (id) 
    REFERENCES employee(role_id),
    INDEX (department_id)
); 

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(30) NOT NULL, 
    FOREIGN KEY (id)
    REFERENCES role (department_id)
);




