-- drops the employees database if it already exists --
DROP DATABASE IF EXISTS employees_db;
-- creates the employees database --
CREATE DATABASE employees_db;

-- uses the employees database --
USE employees_db;

-- creates the tables for department, role, and employee database --
CREATE TABLE departments(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE roles(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);

-- see the employees database in use --
SELECT DATABASE();