import { React, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";
function Users() {
  const [customers, setCustomers] = useState(false);
  const [loading, setLoading] = useState(false);
  function fetchCustomers() {
    setLoading(true);
    fetch("/api/get/customer")
      .then((res) => {
        res.json().then((json) => {
          setCustomers(json.response);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Grid style={{ marginTop: "20px" }} spacing={3} container>
      {loading && <Loading />}
      {customers}
    </Grid>
  );
}

export default Users;
