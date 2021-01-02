const dbConfig = require("../../dbConfig");

module.exports = (tableName) => {
  switch (tableName) {
    case "customer":    
    case "customertel":
    case "shipmentinfo":
    case "product":    
    case "customeradress":    
    case "paymentinfo":
      return `SELECT * from ${tableName}`;
    case "order":
      return `SELECT * from ${dbConfig.database}.${tableName}`;

    default:
      console.error(
        "TABLE NAME COULDN'T BE MATCHED WHILE PREPARING SELECT QUERY"
      );
      return null;
  }
};
