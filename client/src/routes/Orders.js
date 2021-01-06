import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";

function Orders() {
  const [orders, setOrders] = useState(false);
  const [loading, setLoading] = useState(false);
  function fetchOrders() {
    setLoading(true);
    fetch("/api/get/order")
      .then((res) => {
        res.json().then((json) => {
          setOrders(json.response);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Grid style={{ marginTop: "20px" }} spacing={3} container>
      {orders}
      {loading && <Loading />}
    </Grid>
  );
}

export default Orders;
