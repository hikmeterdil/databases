"use strict";
const express = require("express");
const mysql = require("mysql");
const data = require("./data");
const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword"
});
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});
const app = express();
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE newcompany";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created");
  });
});
app.get("/usedb", (req, res) => {
  let sql = "USE newcompany";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("newcompany selected");
  });
});
//Create a table, called employee. Give it the following fields: (employee_no(Primary Key), full_name, salary, address)
app.get("/createemployees", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS employees(emp_no INT PRIMARY KEY AUTO_INCREMENT, full_name VARCHAR(225) NOT NULL,  salary INT NOT NULL, address VARCHAR(225), manager INT NOT NULL, dept_no INT NOT NULL, FOREIGN KEY(manager) REFERENCES employees(emp_no))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Employess table created");
  });
});
app.get("/addemployees", (req, res) => {
  data.employees.forEach(employee => {
    let sql = "INSERT INTO employees SET ?";
    let query = db.query(sql, employee, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
  res.send("Employees inserted");
});

//Create another table, called department with fields:(dept_no(Primary Key), title, description, address)`
app.get("/createdepartments", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS departments(dept_no int PRIMARY KEY AUTO_INCREMENT,description VARCHAR(50), title VARCHAR(50),   address VARCHAR(50))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Departments table created");
  });
});

app.get("/adddepartments", (req, res) => {
  data.departments.forEach(department => {
    let sql = "INSERT INTO departments SET?";
    let query = db.query(sql, department, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
  res.send("Departments inserted");
});
//Write a query that retrieves all employees and their corresponding manager's full name.
app.get("/retrempwithman", (req, res) => {
  let sql = `SELECT emp1.*, 
    emp2.manager AS "manager's_id", emp2.full_name AS "manager's full_name" 
    FROM employees emp1, employees emp2 
    WHERE emp1.manager = emp2.emp_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Write a query that retrieves all employees and their working department title. If no employee worked in a specific department, return the department too.
app.get("/retrempwithdep", (req, res) => {
  let sql = `SELECT employees.*, departments.dept_no, departments.title FROM departments 
    LEFT JOIN employees ON employees.dept_no = departments.dept_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//All department numbers and the number of employees working there.
app.get("/depandempcount", (req, res) => {
  let sql = `SELECT employees.dept_no, COUNT(*) FROM employees 
    RIGHT JOIN departments ON employees.dept_no = departments.dept_no GROUP BY  dept_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Sum of the salaries of all employees.
app.get("/sumsal", (req, res) => {
  let sql = `SELECT SUM(salary) FROM employees;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Average of the salaries of all employees.
app.get("/avgsal", (req, res) => {
  let sql = `SELECT AVG(salary) FROM employees;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Sum of the salaries of the employees per department.
app.get("/salofempperdep", (req, res) => {
  let sql = `SELECT dept_no, SUM(salary) FROM employees GROUP BY dept_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//Minimum and maximum od the salaries per department.
app.get("/minmaxsal", (req, res) => {
  let sql = `SELECT dept_no, MIN(salary),MAX(salary) FROM employees GROUP BY dept_no;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//For each salary value, return the number of employees paid.
app.get("/groupbysal", (req, res) => {
  let sql = `SELECT salary, COUNT(*) FROM employees GROUP BY salary ORDER BY salary;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen("3000", () => {
  console.log("Server started!");
});
