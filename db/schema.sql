-- drops the employees database if it already exists --
DROP DATABASE IF EXISTS employees_db;
-- creates the employees database --
CREATE DATABASE employees_db;

-- uses the employees database --
USE employees_db;

-- creates the tables for department, role, and employee database --
CREATE TABLE departments(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
name VARCHAR(30)
);

CREATE TABLE roles(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
FOREIGN KEY (department_id) 
REFERENCES department(id)
);

CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
FOREIGN KEY (role_id)
REFERENCES role(id),
manager_id INT,
 FOREIGN KEY (manager_id)
REFERENCES employee(id)
);

-- see the employees database in use --
SELECT DATABASE();