import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

function Loading() {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h4">Loading</Typography>
      <CircularProgress color="secondary" />
    </Grid>
  );
}

export default Loading;
