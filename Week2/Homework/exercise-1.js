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
    res.send("company selected");
  });
});

app.get("/createemployees", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS employees(emp_no INT PRIMARY KEY, full_name VARCHAR(50) NOT NULL,  salary INT NOT NULL, manager INT NOT NULL, dept_id INT NOTNULL, adress VARCHAR(50), FOREIGN KEY(manager) REFERENCES employees(emp_no))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Employess table created");
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

app.listen("3000", () => {
  console.log("Server started!");
});
