import React from "react";
import BasicForm from "../MaterialUiBased/BasicForm";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

function CustomerCreditCardForm() {
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
      type="text"
      label="Card Holder Name"
      name="cardName"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="text"
      label="Card Holder Surname"
      name="cardSurname"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="text"
      label="Card Number"
      name="cardNo"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="number"
      label="Expiration Month"
      variant="outlined"
      name="cardExpM"
      required
    />,
    <Field
      component={TextField}
      type="number"
      label="Expiration Year"
      variant="outlined"
      name="cardExpY"
      required
    />,
    <Field
      component={TextField}
      type="number"
      label="CVV"
      variant="outlined"
      name="cardCvv"
      required
    />,
  ];

  const validateFunc = (values) => {
    const errors = {};
    if (!values.FK_CustomerID) errors.FK_CustomerID = "Required";
    if (!values.cardName) errors.cardName = "Required";
    if (!values.cardSurname) errors.cardSurname = "Required";
    if (!values.cardNo) {
      errors.cardNo = "Required";
    }
    if (!values.cardExpM) {
      errors.cardExpM = "Required";
    } else if (values.cardExpM < 1 || values.cardExpM > 12) {
      errors.cardNo = "Invalid Expiration Month";
    }
    if (!values.cardExpY) {
      errors.cardExpY = "Required";
    } else if (values.cardExpY < 20 || values.cardExpY > 99) {
      errors.cardNo = "Invalid Expiration Year";
    }
    if (!values.cardCvv) {
      errors.cardCvv = "Required";
    }
    return errors;
  };

  const initialVals = {
    FK_CustomerID: "",
    cardName: "",
    cardSurname: "",
    cardNo: "",
    cardExpM: 12,
    cardExpY: 20,
    cardCvv: 123,
  };

  return (
    <BasicForm
      ApiCallRoute="paymentinfo"
      fields={fields}
      validateFunc={validateFunc}
      initialValsObj={initialVals}
    />
  );
}

export default CustomerCreditCardForm;
