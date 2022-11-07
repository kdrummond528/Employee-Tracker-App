// dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");


const fs = require("fs");

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
            if (answer.options === "View all departments") { viewDepartments(); }
            if (answer.options === "View all roles") { viewRoles(); }
            if (answer.options === "View all employees") { viewEmployees(); }
            if (answer.options === "Add a department") { addDepartment(); }
            if (answer.options === "Add a role") { addRole(); }
            if (answer.options === "Add an employee") { addEmployee(); }
            if (answer.options === "Update an employee") { updateEmployee(); }
            if (answer.options === "Exit") { connection.end(); }
        });
}

// function to show departments
function viewDepartments() {
    database.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.log("Displaying all departments.");
        console.table(results);
        beginPrompt();
    })
}

// functions to view roles
function viewRoles() {
    database.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
        console.log("Displaying all roles.");
        console.table(results);
        beginPrompt();
    })
}

// function to view employees
function viewEmployees() {
    database.query("SELECT * FROM employee", (err, results) => {
        if (err) throw err;
        console.log("Displaying all employees.");
        console.table(results);
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
            database.query(`INSERT INTO department(name)
            VALUES (?)`, answer.department, function (err) {
                console.log("Added department to the database.")
                if (err) throw err;
                beginPrompt();
            })
        })
}

// function to add a new role
function addRole() {
    inquirer.prompt(
        {
            name: "role_title",
            type: "input",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary for the role?"
        },
        {
            name: "department",
            type: "list",
            message: "Which department does the role belong to?",
            choices: ['Sales',
                'Engineering', 'Finance',
                'Legal', 'Human Resources',
                'Operations']
        })
        .then((answer) => {
            // add role, department, and salary into values
            database.query(`INSERT INTO role(title, salary, department_id)
            VALUES (?, ?, ?)`,
                {
                    title: answer.role_title,
                    salary: answer.salary,
                    department_id: answer.department,
                },
                function (err) {
                    console.log("Added role to the database.")
                    if (err) throw err;
                    beginPrompt();
                })
        })
}

// function to add a new employee
function addEmployee() {
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
            type: "list",
            message: "What is the employee's role?",
            choices: ['Salesperson', 'Sales Manager', 'Software Engineer',
                'Lead Engineer', 'Lawyer', 'Legal Team Lead', 'Accountant',
                'Account Manager', 'Human Resources Specialist',
                'Human Resource Manager', 'Chief of Operations',
                'Chief Executive Officer'],
        },
        {
            name: "employee_manager",
            type: "input",
            message: "What is the employee's manager id?",
        })
        .then((answer) => {
            // insert new employees first name, last name, role, and manager to values
            database.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id)
            VALUES (?, ?, ?, ?)`,
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.employee_role,
                    manager_id: answer.employee_manager,
                },
                function (err) {
                    console.log("Added employee to the database.")
                    if (err) throw err;
                    beginPrompt();
                })
        })
}

// function to update an employee
function updateEmployee() {

    // add employeeList from seeds.sql

    inquirer.prompt(
        {
            name: "employee",
            type: "list",
            message: "Which employee would you like to update?",
            choices: employeeList
        },
        {
            name: "update_type",
            type: "list",
            message: "What would you like to do?",
            choices: ['Update employee role',
                'Update employee salary',
                'Update employee department',
                'Update employee manager']
        },

        // if statements for responses to updates
    )
        .then((answer) => {
            // add updated information to employee values
            database.query(`UPDATE employee SET ?`,
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.employee_role,
                    manager_id: answer.employee_manager,
                },
                function (err) {
                    console.log("Updated employee in the database.")
                    if (err) throw err;
                    beginPrompt();
                })
        })
}
