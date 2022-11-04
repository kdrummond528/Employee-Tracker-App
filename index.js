// dependencies
const mysql = import("mysql");
const inquirer = import("inquirer");

const fs = import("fs");

// connection to employee db
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db'
});

database.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    beginPrompt();
});

// funtion to begin inquirer prompt
function beginPrompt() {
    inquirer.prompt({
        name: "options",
        type: "list",
        message: "Please make a selection.",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"]
    })
        .then((answer) => {
            if (answer.choice === "View all departments") { viewDepartments(); }
            if (answer.choice === "View all roles") { viewRoles(); }
            if (answer.choice === "View all employees") { viewEmployees(); }
            if (answer.choice === "Add a department") { addDepartment(); }
            if (answer.choice === "Add a roll") { addRole(); }
            if (answer.choice === "Add an employee") { addEmployee(); }
            if (answer.choice === "Update an employee") { updateEmployee(); }
            if (answer.choice === "Exit") { database.end(); }
        });
}

// function to show departments
function viewDepartments() {
    database.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        beginPrompt();
    })
}

// functions to view roles
function viewRoles() {
    database.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
        beginPrompt();
    })
}

// function to view employees
function viewEmployees() {
    database.query("SELECT * FROM employee", (err, results) => {
        if (err) throw err;
        beginPrompt();
    })
}

// function to add a new department
function addDepartment() {

}

// function to add a new role
function addRole() {

}

// function to add a new employee
function addEmployee() {

}

// function to update an employee
function updateEmployee() {

}
