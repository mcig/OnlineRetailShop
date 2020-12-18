const express = require("express");
const path = require("path");
const dbConfig = require("./db/dbConfig");
const connection = require("./db/connection");
const query = require("./db/query");
const relatedQuery = require("./db/relatedQuery");
const app = express();
const port = 8000;

//App Use
app.use(express.static(path.join(__dirname, "build")));

// middleware
app.use(express.json());

//Get Calls
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//Post Calls
app.post("/api/insert/*", async (req, res) => {
  const tableName = req.originalUrl.split("/").pop();
  values = JSON.parse(req.body.request);

  let dependentTableName = null;
  if (tableName === "order") dependentTableName = "shipmentinfo";
  else if (tableName === "customer") dependentTableName = "customertel";

  const conn = await connection(dbConfig).catch((e) => {
    console.log(e);
  });

  //perform query
  await query(conn, relatedQuery(tableName, values)).catch(console.log);
  //perform dependent query
  if (dependentTableName)
    await query(conn, relatedQuery(dependentTableName, values)).catch(
      console.log
    );

  res.json({ response: "200 OK" });
});
//Server listen
app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
