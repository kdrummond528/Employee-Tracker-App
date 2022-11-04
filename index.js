// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

// connection to employee db
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

database.connect((err) => {
    if (err) throw err;
    beginQuestions();
});

function beginQuestions() {
    inquirer.prompt({

    })
}