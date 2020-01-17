"use strict";

const util = require("util");

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword"
});

const runQuery = util.promisify(db.query.bind(db));

async function runQueries() {
  try {
    console.log(await runQuery("USE world;"));
    console.log(
      await runQuery(`SELECT Name FROM Country WHERE Population >= '8000000'`)
    );
    console.log(
      await runQuery(`SELECT Name FROM Country WHERE Name LIKE '%land%'`)
    );
    console.log(
      await runQuery(
        `SELECT Name FROM City WHERE Population BETWEEN '500000' AND '1000000'`
      )
    );
    console.log(
      await runQuery(`SELECT Name FROM Country WHERE Continent = 'Europe'`)
    );
    console.log(
      await runQuery(
        `SELECT Name, SurfaceArea FROM Country ORDER BY SurfaceArea DESC`
      )
    );
    console.log(
      await runQuery(`SELECT Name FROM City WHERE CountryCode = 'NLD'`)
    );
    console.log(
      await runQuery(
        `SELECT Name, Population FROM City WHERE Name = 'Rotterdam'`
      )
    );
    console.log(
      await runQuery(
        `SELECT Name FROM Country ORDER BY SurfaceArea DESC LIMIT 10`
      )
    );
    console.log(await runQuery(`SELECT SUM(Population) FROM Country`));
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
