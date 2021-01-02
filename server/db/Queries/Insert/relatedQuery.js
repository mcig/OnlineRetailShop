const dbConfig = require("../../dbConfig");

module.exports = (tableName, values) => {
  switch (tableName) {
    case "customer":
      return `INSERT INTO ${tableName} (Name, Surname, Rating) VALUES ("${values.name}","${values.surname}",${values.rating || 'NULL'});`
    
    case "customertel":
      return `INSERT INTO ${tableName} (Prefix, Number, Customer_idCustomer) VALUES (${values.tel.substring(1,3) || 'NULL'},"${values.tel.substring(3) || 'NULL'}",${values.FK_CustomerID});`;
    
    case "order":
      return `INSERT INTO ${dbConfig.database}.${tableName} (OrderedAt, Status, Customer_idCustomer, Product_idProduct) VALUES ("${values.orderedAt}","${values.orderStatus || 'NULL'}",${values.FK_CustomerID},${values.FK_ProductID});`
    
    case "shipmentinfo":
      return `INSERT INTO ${tableName} (Status, EstimatedDeliveryDate, VolumetricWeight, Order_idOrder) VALUES ("${values.shipmentStatus || 'NULL'}","${values.eta}",${values.volweight},${values.FK_OrderID});`;
    
    case "product":
      return `INSERT INTO ${tableName} (Name,Price,ImgUrl,Description,Likes) VALUES ("${values.name}",${values.price},"${values.url || 'NULL'}","${values.description || 'NULL'}",${values.likes || 'NULL'});`;
    
    case "customeradress":
      return `INSERT INTO ${tableName} (Country, State, City, Street,HouseNumber, FlatNumber, Customer_idCustomer) VALUES ("${values.country}","${values.state || 'NULL'}","${values.city}","${values.street || 'NULL'}","${values.houseNumber || 'NULL'}","${values.flatNumber || 'NULL'}",${values.FK_CustomerID});`;
    
    case "paymentinfo":
      return `INSERT INTO ${tableName} (CardName, CardSurname, CardNumber, ExpMonth,ExpYear, CVV, Customer_idCustomer) VALUES ("${values.cardName}","${values.cardSurname}","${values.cardNo}",${values.cardExpM},${values.cardExpY},${values.cardCvv},${values.FK_CustomerID});`;
    
    default:
      console.error(
        "TABLE NAME COULDN'T BE MATCHED WHILE PREPARING INSERT QUERY"
      );
      return "";
  }
};
