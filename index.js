// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const { default: ListPrompt } = require("inquirer/lib/prompts/list");

// connection to employee db
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db'
});

database.connect((err) => {
    if (err) throw err;
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
        begin();
    })
}

function viewRoles() { }

function viewEmployees() { }

function addDepartment() { }

function addRole() { }

function addEmployee() { }

function updateEmployee() { }
