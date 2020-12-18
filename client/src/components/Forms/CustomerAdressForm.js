import React from "react";
import BasicForm from "../MaterialUiBased/BasicForm";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

function CustomerAdressForm() {
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
      type="country"
      label="Country"
      name="country"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="city"
      label="City"
      name="city"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="state"
      label="State"
      name="state"
      variant="outlined"
    />,
    <Field
      component={TextField}
      type="street"
      label="Street"
      name="street"
      variant="outlined"
    />,
    <Field
      component={TextField}
      type="number"
      label="House Number"
      name="houseNumber"
      variant="outlined"
    />,
    <Field
      component={TextField}
      type="number"
      label="Flat Number"
      name="flatNumber"
      variant="outlined"
    />,
  ];

  const validateFunc = (values) => {
    const errors = {};
    if (!values.FK_CustomerID) errors.FK_CustomerID = "Required";
    if (!values.country) errors.country = "Required";
    if (!values.city) errors.city = "Required";
    return errors;
  };

  const initialVals = {
    FK_CustomerID: "",
    country: "",
    city: "",
    state: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
  };

  return (
    <BasicForm
      ApiCallRoute="customeradress"
      fields={fields}
      validateFunc={validateFunc}
      initialValsObj={initialVals}
    />
  );
}

export default CustomerAdressForm;
