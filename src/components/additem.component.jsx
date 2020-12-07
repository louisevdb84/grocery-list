import React, { useState } from "react";
import { connect } from "react-redux";
import addItem from "../redux/items/item.actions";
import MultiSelect from "react-multi-select-component";
import Shops from "../mock-db/shop";
import { Button, Grid, TextField } from "@material-ui/core";

const AddItem = ({ addItem }) => {
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
    
    addItem({
      id: Math.floor(Math.random() * 100),
      name: newitem,
      shops: shoparray(selected),
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(AddItem);
