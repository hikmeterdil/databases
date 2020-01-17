
  // we can send a query such as this one to delete data from the database =>
  "inj; DELETE FROM city; --" 

  //to prevent this we can rewrite our function like this 

  function getPopulation(cityOrCountry, name, cb) {
    conn.query(
      `SELECT Population FROM ? WHERE Name = ?`, [cityOrCountry, name],
            function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    )};