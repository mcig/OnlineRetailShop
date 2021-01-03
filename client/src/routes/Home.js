import { React, useState, useEffect } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Product from "../components/Products/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  function fetchProducts() {
    setLoading(true);
    fetch("/api/get/product")
      .then((res) => {
        res.json().then((json) => {
          setProducts(json.response);
        });
      })
      .catch((e) => console.log(e));
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Grid style={{ marginTop: "20px" }} spacing={3} container>
      {products.map((product, idx) => (
        <Grid key={idx} item>
          <Product data={product} />
        </Grid>
      ))}
      {loading && (
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4">Loading</Typography>
          <CircularProgress color="secondary" />
        </Grid>
      )}
    </Grid>
  );
}

export default Home;
