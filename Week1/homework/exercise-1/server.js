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
  let sql = "CREATE DATABASE company";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created");
  });
});

app.get("/usedb", (req, res) => {
  let sql = "USE company";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("company selected");
  });
});

app.get("/createemployees", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS employees(emp_no int, emp_name VARCHAR(50),  salary int, reports_to int)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Employess table created");
  });
});

app.get("/createdepartments", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS departments(dept_no int, dept_name VARCHAR(50),  manager int)";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Departments table created");
  });
});

app.get("/createprojects", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS projects(proj_no int, proj_name VARCHAR(50),  starting_date VARCHAR(50), ending_date VARCHAR(50))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Projects table created");
  });
});

app.get("/addemployees", (req, res) => {
  data.employees.forEach(employee => {
    let sql = "INSERT INTO employees SET?";
    let query = db.query(sql, employee, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
  res.send("Employees inserted");
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

app.get("/addprojects", (req, res) => {
  data.projects.forEach(project => {
    let sql = "INSERT INTO projects SET?";
    let query = db.query(sql, project, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
  res.send("Projects inserted");
});

app.listen("3000", () => {
  console.log("Server started!");
});
