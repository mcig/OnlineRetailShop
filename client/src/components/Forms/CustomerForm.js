import React from "react";
import BasicForm from "../MaterialUiBased/BasicForm";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

function CustomerForm() {
  const fields = [
    <Field
      component={TextField}
      name="name"
      type="text"
      label="Name"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="text"
      label="Surname"
      name="surname"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="number"
      label="Rating"
      variant="outlined"
      name="rating"
    />,
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
      type="tel"
      label="Telephone"
      name="tel"
      variant="outlined"
      required
    />,
  ];

  const validateFunc = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";
    if (values.rating < 0 || values.rating > 10.0)
      errors.rating = "Rating cannot be negative or greater than 10";
    if (!values.tel) errors.tel = "Required";
    if (!values.FK_CustomerID) errors.FK_CustomerID = "Required";
    return errors;
  };

  const initialVals = {
    name: "",
    surname: "",
    rating: "",
    FK_CustomerID: "",
    tel: "+90",
  };

  return (
    <BasicForm
      ApiCallRoute="customer"
      fields={fields}
      validateFunc={validateFunc}
      initialValsObj={initialVals}
    />
  );
}

export default CustomerForm;
