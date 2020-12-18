import React from "react";
import BasicForm from "../MaterialUiBased/BasicForm";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

function ProductForm() {
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
      type="number"
      label="Price"
      name="price"
      variant="outlined"
      required
    />,
    <Field
      component={TextField}
      type="url"
      label="ImageUrl"
      variant="outlined"
      name="url"
    />,
    <Field
      component={TextField}
      type="text"
      label="Description"
      name="description"
      multiline
      variant="outlined"
      rows={4}
      rowsMax={8}
    />,
    <Field
      component={TextField}
      type="number"
      label="Likes"
      variant="outlined"
      name="likes"
    />,
  ];

  const validateFunc = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.price) {
      errors.price = "Required";
    }
    if (values.price < 0 || values.rating > 1000000) {
      errors.price = "Price cannot be negative or greater than 1 million";
    }
    if (values.description.length > 255) {
      errors.description =
        "Description cannot be longer than 255 characters. Go Thank twitter ;D";
    }
    return errors;
  };

  const initialVals = {
    name: "",
    price: "",
    url: "",
    description: "",
    likes: "",
  };

  return (
    <BasicForm
      ApiCallRoute="product"
      fields={fields}
      validateFunc={validateFunc}
      initialValsObj={initialVals}
    />
  );
}

export default ProductForm;
