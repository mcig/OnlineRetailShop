const express = require("express");
const path = require("path");
const dbConfig = require("./db/dbConfig");
const connection = require("./db/connection");
const query = require("./db/query");
const relatedInsertQuery = require("./db/Queries/Insert/relatedQuery");
const relatedSelectQuery = require("./db/Queries/Select/relatedQuery");
const app = express();
const port = 8000;

//App Use
app.use(express.static(path.join(__dirname, "build")));

// middleware
app.use(express.json());

//Get Calls
app.get("/api/get/*", async (req, res) => {
  const tableName = req.originalUrl.split("/").pop();
  const conn = await connection(dbConfig).catch((e) => {
    console.log(e);
  });

  if (!relatedSelectQuery(tableName)) {
    res.json({
      status: "400",
      message: "WRONG TABLE NAME",
    });
    return;
  }
  //perform query
  const queryResult = await query(conn, relatedSelectQuery(tableName)).catch(
    console.log
  );
  res.json({ status: "200", response: queryResult });
});

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
  await query(conn, relatedInsertQuery(tableName, values)).catch(console.log);
  //perform dependent query
  if (dependentTableName)
    await query(conn, relatedInsertQuery(dependentTableName, values)).catch(
      console.log
    );

  res.json({ response: "200 OK" });
});
//Server listen
app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
