import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "../components/Products/ProductCard";
import Loading from "../components/MaterialUiBased/Loading";
function Home() {
  const [products, setProducts] = useState(null);
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
      {loading && <Loading />}
      {products &&
        products.map((product, idx) => (
          <Grid key={idx} item>
            <Product setter={setProducts} data={product} />
          </Grid>
        ))}
    </Grid>
  );
}

export default Home;
