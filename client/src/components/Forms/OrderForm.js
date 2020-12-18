import React from "react";
import BasicForm from "../MaterialUiBased/BasicForm";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

function OrderForm() {
  const fields = [
    <Field
      component={TextField}
      name="FK_CustomerID"
      type="number"
      label="Customer ID"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      name="FK_ProductID"
      type="number"
      label="Product ID"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      name="orderedAt"
      type="date"
      label="Order Date"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      name="FK_OrderID"
      type="number"
      label="Order ID"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      name="orderStatus"
      type="text"
      label="Order Status"
      variant="outlined"
    />,
    <Field
      component={TextField}
      name="eta"
      type="date"
      label="Estimated Delivery Date"
      variant="outlined"
    />,
    <Field
      component={TextField}
      name="shipmentStatus"
      type="text"
      label="Shipment Status"
      variant="outlined"
    />,
    <Field
      component={TextField}
      name="volweight"
      type="number"
      label="Volumetric Weight"
      variant="outlined"
      required
    />,
  ];

  const validateFunc = (values) => {
    const errors = {};
    if (!values.FK_CustomerID) errors.FK_CustomerID = "Required";
    if (!values.FK_ProductID) errors.FK_ProductID = "Required";
    if (!values.FK_OrderID) errors.FK_OrderID = "Required";
    if (!values.orderedAt) errors.orderedAt = "Required";
    if (values.orderedAt > values.eta) errors.eta = "Delivery date is invalid";
    if (!values.volweight) errors.volweight = "Required";

    return errors;
  };

  const initialVals = {
    FK_CustomerID: "",
    FK_ProductID: "",
    orderedAt: "2020-01-01",
    orderStatus: "placed",
    FK_OrderID: "",
    shipmentStatus: "waiting",
    eta: "2020-01-01",
    volweight: 0,
  };

  return (
    <BasicForm
      ApiCallRoute="order"
      fields={fields}
      validateFunc={validateFunc}
      initialValsObj={initialVals}
    />
  );
}

export default OrderForm;
