import React from "react";
import { Grid, Button } from "@material-ui/core";
function CustomerData({ FixedData }) {
  return (
    <div>
      <Grid container direction="flex" alignItems="center">
        {FixedData && FixedData.map((data) => <Grid item>{data}</Grid>)}
      </Grid>
      <Grid container justify="center">
        <Grid sm={3} item>
          <Button variant="contained" color="secondary">
            Address
          </Button>
        </Grid>
        <Grid sm={3} item>
          <Button variant="contained" color="secondary">
            Telephone
          </Button>
        </Grid>
        <Grid sm={3} item>
          <Button variant="contained" color="secondary">
            Payment Info
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomerData;
