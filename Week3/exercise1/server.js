"use strict";

const util = require("util");

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword"
});

const skills = [
  {
    skill_name: "Angular"
  },
  {
    skill_name: "Node"
  },
  {
    skill_name: "Vue"
  },
  {
    skill_name: "Cotlin"
  },
  {
    skill_name: "Swift"
  },
  {
    skill_name: "Assembly"
  }
];

const runQuery = util.promisify(db.query.bind(db));

async function runQueries() {
  try {
    console.log(await runQuery("USE company;"));
    console.log(
      await runQuery(`CREATE TABLE IF NOT EXISTS skills (
        skill_no INT PRIMARY KEY AUTO_INCREMENT, 
        skill_name VARCHAR(100))`)
    );
    console.log(
      await runQuery(`CREATE TABLE IF NOT EXISTS emp_skills (
        emp_no INT, 
        skill_no INT, 
        FOREIGN KEY(emp_no) REFERENCES employees(emp_no),
        FOREIGN KEY(skill_no) REFERENCES skills(skill_no))`)
    );
    console.log(await runQuery("USE company;"));

    for (const skill of skills) {
      let sql = "INSERT INTO skills SET?";
      console.log(await runQuery(sql, skill));
    }
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
