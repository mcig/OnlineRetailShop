import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { Button, LinearProgress } from "@material-ui/core";

function BasicForm({ ApiCallRoute, fields, validateFunc, initialValsObj }) {
  //Api Call On Submit
  const ApiPostCall = (endpoint, request) => {
    axios
      .post(endpoint, {
        request,
      })
      .then((response) => {
        console.log(`Got Response:${response}`);
      });
  };

  return (
    <Formik
      initialValues={initialValsObj}
      validate={validateFunc}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          ApiPostCall(
            `/api/insert/${ApiCallRoute}`,
            JSON.stringify(values, null, 2)
          );
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {fields.map((field) => field)}
          {isSubmitting && <LinearProgress />}
          <Button
            variant="contained"
            color="secondary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default BasicForm;
