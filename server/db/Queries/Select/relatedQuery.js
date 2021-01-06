const dbConfig = require("../../dbConfig");

module.exports = (tableName,id=null) => {
  switch (tableName) {
    case "shipmentinfo":
    case "customer":    
    case "product":
      return `SELECT * from ${tableName}`;
    
    case "customertel":
    case "customeradress":    
    case "paymentinfo":
      return id ? `SELECT * from ${tableName} where Customer_idCustomer = ${id}`
        :`SELECT * from ${tableName}`;

    case "order":
      return `SELECT * from ${dbConfig.database}.${tableName}`;

    default:
      console.error(
        "TABLE NAME COULDN'T BE MATCHED WHILE PREPARING SELECT QUERY"
      );
      return null;
  }
};
