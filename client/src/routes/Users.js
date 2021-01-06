import { React, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";
function Users() {
  const [customers, setCustomers] = useState(null);
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
      {customers && customers.map((customer) => <h3>{customer.idCustomer}</h3>)}
    </Grid>
  );
}

export default Users;
