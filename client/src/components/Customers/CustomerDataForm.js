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
          setSubData(json.response);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        {FixedData &&
          FixedData.map((data, idx) => (
            <Grid item>
              <Typography
                color={idx !== 2 ? "primary" : "secondary"}
                variant="h5"
              >
                <Grid container alignItems="center">
                  {idx === 2 ? <Favorite color="secondary" /> : null}
                  {data}
                </Grid>
              </Typography>
            </Grid>
          ))}
      </Grid>
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
        alignItems="center"
      >
        {loading && <Loading />}
        {subData &&
          subData.map((data, idx) => (
            <Grid item>
              <Typography variant="h5">{data}</Typography>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default CustomerDataForm;
