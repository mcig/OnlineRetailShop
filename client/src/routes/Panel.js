import React from "react";
import { Grid } from "@material-ui/core";
import MediaCard from "../components/MaterialUiBased/MediaCard";
import CustomerForm from "../components/Forms/CustomerForm";
import AdressForm from "../components/Forms/CustomerAdressForm";
import CreditCardForm from "../components/Forms/CustomerCreditCardForm";
import ProductForm from "../components/Forms/ProductForm";
import OrderForm from "../components/Forms/OrderForm";
import Product from "@material-ui/icons/Create";
import User from "@material-ui/icons/Person";
import Order from "@material-ui/icons/MonetizationOn";
import Adress from "@material-ui/icons/LocationCity";
import CreditCard from "@material-ui/icons/CreditCard";

function Panel() {
  return (
    <div>
      <Grid container spacing={4} direction="row" justify="space-around">
        <Grid xs={12} sm={4} item>
          <MediaCard
            title="Product"
            icon={<Product color="primary" style={{ fontSize: 250 }} />}
            form={<ProductForm />}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <MediaCard
            title="Order"
            icon={<Order color="primary" style={{ fontSize: 250 }} />}
            form={<OrderForm />}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <MediaCard
            title="User"
            icon={<User color="primary" style={{ fontSize: 250 }} />}
            form={<CustomerForm />}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} direction="row" justify="space-around">
        <Grid xs={12} sm={4} item>
          <MediaCard
            title="Adress"
            icon={<Adress color="primary" style={{ fontSize: 250 }} />}
            form={<AdressForm />}
          />
        </Grid>
        <Grid xs={12} sm={4} item>
          <MediaCard
            title="Credit Card"
            icon={<CreditCard color="primary" style={{ fontSize: 250 }} />}
            form={<CreditCardForm />}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Panel;
