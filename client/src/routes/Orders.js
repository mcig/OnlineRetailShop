import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";
import BasicTable from "../components/MaterialUiBased/BasicTable";

function Orders() {
  const [orders, setOrders] = useState(null);
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
    <Grid style={{ marginTop: "20px" }} container>
      {loading && <Loading />}
      {orders && (
        <Grid container justify="center">
          <Grid>
            <BasicTable
              headers={[
                "Order id",
                "Order Date",
                "Order Status",
                "Customer",
                "Product",
              ]}
              rows={orders}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Orders;
