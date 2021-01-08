import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Loading from "../components/MaterialUiBased/Loading";
import BasicTable from "../components/MaterialUiBased/BasicTable";

function Orders() {
  const [orders, setOrders] = useState(null);
  const [shipments, setShipments] = useState(null);
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
  function fetchShipments() {
    setLoading(true);
    fetch("/api/get/shipmentinfo")
      .then((res) => {
        res.json().then((json) => {
          setShipments(json.response);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  useEffect(() => {
    fetchOrders();
    fetchShipments();
  }, []);

  return (
    <Grid style={{ marginTop: "20px" }} container>
      {loading && <Loading />}
      <Grid container justify="center">
        {orders && (
          <Grid sm={6}>
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
        )}
        {shipments && (
          <Grid sm={6}>
            <BasicTable
              headers={[
                "Shipment id",
                "Shipment Status",
                "ETA",
                "VolWeight",
                "Order Id",
              ]}
              rows={shipments}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Orders;
