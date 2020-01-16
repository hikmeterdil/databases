"use strict";
const express = require("express");
const mysql = require("mysql");
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

app.get("/usedb", (req, res) => {
  let sql = "USE world";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("world db selected");
  });
});

app.get("/getcountryover8m", (req, res) => {
  let sql = `SELECT Name FROM Country WHERE Population >= '8000000'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcountrywithland", (req, res) => {
  let sql = `SELECT Name FROM Country WHERE Name LIKE '%land%'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcountrybetween500k-1m", (req, res) => {
  let sql = `SELECT Name FROM City WHERE Population BETWEEN '500000' AND '1000000'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcountryineur", (req, res) => {
  let sql = `SELECT Name FROM Country WHERE Continent = 'Europe'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcountrybysurface", (req, res) => {
  let sql = `SELECT Name, SurfaceArea FROM Country ORDER BY SurfaceArea DESC`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcityofnld", (req, res) => {
  let sql = `SELECT Name FROM City WHERE CountryCode = 'NLD'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getrotterdampop", (req, res) => {
  let sql = `SELECT Name, Population FROM City WHERE Name = 'Rotterdam'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getcountrybyarea", (req, res) => {
  let sql = `SELECT Name FROM Country ORDER BY SurfaceArea DESC LIMIT 10`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getworldpop", (req, res) => {
  let sql = `SELECT SUM(Population) FROM Country`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen("3000", () => {
  console.log("Server started!");
});
