// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const { default: ListPrompt } = require("inquirer/lib/prompts/list");

// connection to employee db
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
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
            if 

    });
}