import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
// import Shops from "../mock-db/shop";
import { Button, Grid, TextField } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";

const ADD_ITEM = gql`
  mutation addItem_API($name: String!, $shopID: [String]) {
    addItem_API(name: $name, shopID: $shopID) {
      id
      name
      shop {
        id
        name
      }
    }
  }
`;

const GET_SHOPS = gql`
  query getShops {
    shops {
      id
      name

      item {
        id
        name
      }
    }
  }
`;

const AddItem = () => {
  const { data } = useQuery(GET_SHOPS);
  const [addItem_API] = useMutation(ADD_ITEM);
  const [newitem, setNewitem] = useState("");
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSubmit = (event) => {
    let shoparray = (selecteditems) => {
      return selecteditems.map((selectedshop) => selectedshop.value);
    };
    addItem_API({
      variables: {
        name: newitem,
        shopID: shoparray(selected),
      },
    }).then(() => window.location.reload());

    setNewitem("");
    event.preventDefault();
  };
  const options = data
    ? data.shops.map((shop) => {
        return { label: shop.name, value: shop.id };
      })
    : { label: "Loading", value: "1" };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <TextField
              value={newitem}
              required
              id="newitem"
              name="newitem"
              label="Add new item"
              fullWidth
              autoComplete="given-name"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy={"Select"}
            />
          </Grid>

          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="primary" type="submit">
              Add item
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddItem;
