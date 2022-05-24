const inquirer = require('inquirer');
const management = require('./util/management.js');

const promptOptions = () => {
    console.log(`
==================
Management Options
==================
    `)
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'managementOptions',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role'
                ]
            }
        )
        .then(selectionInput => {
            switch(selectionInput.managementOptions) {
                case 'View All Departments':
                    management.viewDepartments().then(([departments]) => {
                        console.table(departments);
                    });
                    break;
                case 'View All Roles':
                    management.viewRoles().then(([roles]) => {
                        console.table(roles);
                    });
                    break;
                case 'View All Employees':
                    management.viewEmployees().then(([employees]) => {
                        console.table(employees);
                    });
                    break;
                 case 'Add a Department':
                     inquireDepartment();
                     management.addDepartment(deptName).then(([departments]) => {
                        console.table(departments);
                    });
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
            }
        });
};

const inquireDepartment = () => {
    return inquirer
        .prompt(
            {
                type: 'input',
                name: 'deptName',
                message: 'You opted to create a new department. What shall the department name be?',
                validate: response => {
                    if (response) {
                        return true;
                    }
                    else {
                        console.log('The response was empty. Please try again.')
                        return false;
                    }
                }
            }
        )
        .then(response => {
            const deptName = response.deptName;
            addDepartment(deptName);
        });
};

promptOptions();