-- department names
INSERT INTO department (name)
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal"),
("Human Resources"),
("Operations");

-- title, salary, and id information
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 40000, 1),
("Sales Manager", 60000, 2),
("Software Engineer", 80000, 3),
("Lead Engineer", 100000, 4),
("Lawyer", 80000, 5),
("Legal Team Lead", 100000, 6),
("Accountant", 60000, 7),
("Account Manager", 80000, 8),
("Human Resource Specialist", 80000, 9),
("Human Resource Manager", 100000, 10),
("Chief of Operations", 125000, 11),
("Chief Executive Officer", 150000, 12);

-- first and last name, role and manager id information 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 1, NULL),
("Carol", "Danvers", 2, NULL),
("Thor", "Odinson", 3, 4),
("Stephen", "Strange", 4, NULL),
("Steve", "Rogers", 5, 6),
("Wanda", "Maximoff", 6, NULL),
("Bruce", "Banner", 7, 8),
("Nastasha", "Romanoff", 8, NULL),
("Sam", "Wilson", 9, 10),
("Peter", "Parker", 10, NULL),
("Jennifer", "Walters", 11, 12),
("King", "T'Challa", 12, NULL);