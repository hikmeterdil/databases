"use strict";

const util = require("util");
const mysql = require("mysql");
const data = require("./data");
const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword"
});

const runQuery = util.promisify(db.query.bind(db));

async function flatify(dept_no, emp_no) {
  await runQueary("START TRANSACTION");
  await runQuery("UPDATE departments SET manager = ? WHERE dept_no = ?", [
    emp_no,
    dept_no
  ]);
  await runQuery("UPDATE employees SET reports_to = ? WHERE works_at = ?", [
    emp_no,
    dept_no
  ]);
  await runQuery("COMMIT");
}

async function runQueries() {
  try {
    console.log(await runQuery("DROP DATABASE company"));
    console.log(await runQuery("CREATE DATABASE IF NOT EXISTS company;"));
    console.log(await runQuery("USE company;"));
    console.log(
      await runQuery(
        "CREATE TABLE IF NOT EXISTS employees(emp_no int PRIMARY KEY, emp_name VARCHAR(50),  salary int, reports_to int, works_at int NOT NULL, FOREIGN KEY(reports_to) REFERENCES employees(emp_no), FOREIGN KEY(works_at) REFERENCES departments(dept_no));"
      )
    );
    console.log(
      await runQuery(
        "CREATE TABLE IF NOT EXISTS departments(dept_no int NOT NULL PRIMARY KEY, dept_name VARCHAR(50),  manager int NOT NULL, FOREIGN KEY(manager) REFERENCES employees(emp_no))"
      )
    );
    console.log(
      await runQuery(
        "CREATE TABLE IF NOT EXISTS projects(proj_no int NOT NULL PRIMARY KEY, proj_name VARCHAR(50),  starting_date VARCHAR(50), ending_date VARCHAR(50))"
      )
    );

    for (const employee of data.employees) {
      let sql = "INSERT INTO employees SET?";
      console.log(await runQuery(sql, employee));
    }

    for (const department of data.departments) {
      let sql = "INSERT INTO departments SET?";
      console.log(await runQuery(sql, department));
    }

    for (const project of data.projects) {
      let sql = "INSERT INTO projects SET?";
      console.log(await runQuery(sql, project));
    }

    flatify(200, 5);
  } catch (err) {
    console.error(err);
  }
}

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");

  runQueries();
});
