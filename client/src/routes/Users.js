import { React, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";
import MediaCard from "../components/MaterialUiBased/MediaCard";
import User from "@material-ui/icons/Person";

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
      {customers &&
        customers.map((customer) => (
          <Grid xs={12} sm={4} item>
            <MediaCard
              title={customer.idCustomer}
              icon={<User color="primary" style={{ fontSize: 200 }} />}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default Users;
