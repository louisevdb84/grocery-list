import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Shops from "../mock-db/shop";
import { Button, Grid, TextField } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_ITEM = gql`
  mutation addItem_API {
    addItem_API(name: "Chocolates", shopID: "5fce2f4eab840e4bccbd56c0") {
      id
      name
      shop {
        id
        name
      }
    }
  }
`;

const AddItem = () => {
  const [addItem_API] = useMutation(ADD_ITEM);
  const [newitem, setNewitem] = useState("");
  const [selected, setSelected] = useState([{ label: "Lidl", value: 1 }]);

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSubmit = (event) => {
    let shoparray = (selecteditems) => {
      return selecteditems.map((selectedshop) => ({
        id: selectedshop.value,
        name: selectedshop.label,
      }));
    };

    addItem_API({
      variables: {
        name: newitem,
        shops: shoparray(selected),
      },
    });

    setNewitem("");
    event.preventDefault();
  };

  const options = Shops.map((shop) => {
    return { label: shop.name, value: shop.id };
  });

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
