import { React, useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import Loading from "../MaterialUiBased/Loading";
function CustomerDataForm({ FixedData, id }) {
  const [subData, setSubData] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchData(tableName) {
    setLoading(true);
    fetch(`/api/get/${tableName}?id=${id}`)
      .then((res) => {
        res.json().then((json) => {
          setSubData(json.response[0]);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  return (
    <div>
      {FixedData && (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography color="primary" variant="h5">
              {FixedData[0]} {FixedData[1]}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Favorite color="secondary" />
              {FixedData[2]}
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid
        style={{ marginTop: "10px" }}
        container
        spacing={1}
        justify="center"
      >
        <Grid item>
          <Button
            onClick={() => fetchData("customeradress")}
            variant="contained"
            color="secondary"
          >
            Address
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => fetchData("customertel")}
            variant="contained"
            color="secondary"
          >
            Telephone
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => fetchData("paymentinfo")}
            variant="contained"
            color="secondary"
          >
            Payment Info
          </Button>
        </Grid>
      </Grid>
      <Grid
        style={{ marginTop: "10px" }}
        container
        direction="column"
        spacing={1}
      >
        {loading && <Loading />}
        {subData &&
          Object.keys(subData).map((key, idx) => {
            //dont print last elem
            return idx === Object.keys(subData).length - 1 ? null : (
              <Grid item>
                <Typography
                  display="inline"
                  color={idx % 2 === 0 ? "primary" : "secondary"}
                  variant="h5"
                >
                  {key} :
                </Typography>
                <Typography display="inline" variant="h5">
                  {" "}
                  {subData[key]}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default CustomerDataForm;
