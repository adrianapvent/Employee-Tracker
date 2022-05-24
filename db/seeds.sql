INSERT INTO departments (name)
VALUES
    ('Management'),
    ('Sales'),
    ('Legal'),
    ('Engineer'),
    ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Manager', 100000, 1),
    ('Attorney', 80000, 3),
    ('Salesman', 75000, 2),
    ('Technician', 35000, 4),
    ('Senior Engineer', 80000, 4),
    ('Office Clerk', 12000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Adriana', 'Ventura', 1, NULL),
    ('Victor', 'Lujan', 3, NULL),
    ('Bella', 'Pena', 3, NULL),
    ('Zeena', 'Play', 4, NULL);