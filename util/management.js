const inquirer = require('inquirer');
const db = require('../config/connection.js');
/* const management = require('./Management.js'); */
require('console.table');
const promptManagementList = {
        type: 'list',
        name: 'managementOptions',
        message: 'choose a management option',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role'
        ]
};
const promptDeptName = {
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
};
class Menu {
    constructor() {
    }
    mainMenu() {
        console.log(`
        =================
            Main Menu
        =================
            `)
        return inquirer
            .prompt(promptManagementList)
            .then(selectionInput => {
                switch (selectionInput.managementOptions) {
                    case 'View All Departments':
                        this.viewDepartments();
                        break;
                    case 'View All Roles':
                        this.viewRoles();
/*                         management.viewRoles().then(([roles]) => {
                            console.table(roles);
                        }); */
                        break;
                    case 'View All Employees':
                        management.viewRoles().then(([employees]) => {
                            console.table(employees);
                        });
                        break;
                    case 'Add a Department':
                        inquirer.prompt(promptDeptName).then(response => {
                            console.log(response);
                            const deptName = response.deptName;
                            console.log(deptName, 'NEWd');
                            addDepartment(deptName);
/*                             management.addDepartment(deptName).then(([departments]) => {
                                console.table(departments);
                            }); */
                            return this.mainMenu();
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
    }
    viewDepartments() {
        const sql = `SELECT * FROM departments`;
        return db.query(sql, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.mainMenu();
        });
    }
    viewRoles() {
        const sql = `
        SELECT roles.*, departments.name
        AS department_name
        FROM roles
        LEFT JOIN departments
        ON roles.department_id = departments.id
        `;
        return db.query(sql, (err, rows) => {
            if (err) throw err;
            console.table(rows);
            this.mainMenu();
        });
    }
};


module.exports = Menu;