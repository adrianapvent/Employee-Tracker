const dbConnect = require('../config/connection.js');
const inquirer = require('inquirer');

class Management {
    constructor (dbConnect) {
        this.dbConnect = dbConnect;
    }
    viewDepartments() {
        return this.dbConnect.promise().query("SELECT * FROM departments");
    }
    viewRoles() {
        return this.dbConnect.promise().query("SELECT * FROM roles");
    }
    viewEmployees() {
        return this.dbConnect.promise().query("SELECT * FROM employees");
    }
    addDepartment(deptName) {
            return this.dbConnect.promise().query(`
            INSERT INTO departments (name)
            VALUES
                ('${deptName}');
            `);
    }
    inquireDepartment() {
    }
    addRole() {
    }
    addEmployee() {
    }
    updateEmployeeRole() {
    }
}

/* const addRole = () => {
    const department = `SELECT * FROM departments`
    console.table(department);
}; */
/* const addEmployee = () => {
    const department = `SELECT * FROM departments`
    console.table(department);
}; */
/* const updateEmployeeRole = () => {
    const department = `SELECT * FROM departments`
    console.table(department);
}; */
/*
`
SELECT roles.*, departments.name AS department_name
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id;
`
`
SELECT *
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id;
`
*/
module.exports = new Management(dbConnect);