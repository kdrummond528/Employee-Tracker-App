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
    inquirer.prompt({
        name: "department",
        type: "input",
        message: "What is the name of the department?",
    })
        .then((answer) => {
            // add department to the databse
        })
    console.log("Added department to the database.")
    if (err) throw err;
    beginPrompt();
}

// function to add a new role
function addRole() {
    // import department list for choices in prompt
    let departmentList =

        inquirer.prompt(
            {
                name: "role",
                type: "input",
                message: "What is the name of the role?",
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for the role?",
            },
            {
                name: "department",
                type: "list",
                message: "Which department does the role belong to?",
                choices: departmentList,
            })
            .then((answer) => {
                // insert role, department, and salary into values
            })
    console.log("Added role to the database.")
    if (err) throw err;
    beginPrompt();
}

// function to add a new employee
function addEmployee() {
    // import role list for choices in prompt
    let roleList =

        // import manager list for choices in prompt
        let managerList =

            inquirer.prompt(
                {
                    name: "first_name",
                    type: "input",
                    message: "What is the employee's first name?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is the employee's last name?",
                },
                {
                    name: "employee_role",
                    type: "input",
                    message: "What is the employee's role?",
                    choices: roleList,
                },
                {
                    name: "employee_manager",
                    type: "input",
                    message: "What is the employee's manager?",
                    choices: managerList,
                })
                .then((answer) => {
                    // insert new employees first name, last name, role, and manager to values
                })
    console.log("Added employee to the database.")
    if (err) throw err;
    beginPrompt();
}

// function to update an employee
function updateEmployee() {

}
