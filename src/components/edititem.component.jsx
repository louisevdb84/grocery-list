import { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import MultiSelect from "react-multi-select-component";
import { Button, Grid, TextField } from "@material-ui/core";

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

const EDIT_ITEM = gql`
  mutation editItem($_id: String!, $name: String!, $shopID: [String]) {
    editItem(_id: $_id, name: $name, shopID: $shopID) {
      name
    }
  }
`;

export default function EditItem({ id, name, shop }) {
  const [editItem] = useMutation(EDIT_ITEM);
  const { data } = useQuery(GET_SHOPS);
  const [editeditem, setEditeditem] = useState("");
  const [selected, setSelected] = useState();

  useEffect(() => {
    setEditeditem(name);
    console.log(shop);
    if (shop) {
      setSelected(shop.map((shop) => ({ value: shop.id, label: shop.name })));
    }
  }, []);

  const handleChange = (event) => {
    setEditeditem(event.target.value);
  };

  const handleSubmit = (event) => {
    let shoparray = (selecteditems) => {
      return selecteditems.map((selectedshop) => selectedshop.value);
    };

    if (selected && selected.length > 0) {
      editItem({
        variables: {
          _id: id,
          name: editeditem,
          shopID: shoparray(selected),
        },
      }).then(() => window.location.reload());

      setEditeditem("");
    } else {
      alert("Select a shop");
    }

    event.preventDefault();
  };
  const options = data
    ? data.shops.map((shop) => {
        return { label: shop.name, value: shop.id };
      })
    : { label: "Loading", value: "1" };

  return (
    <div>
      <h1>Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <TextField
              value={editeditem}
              required
              id="edititem"
              name="edititem"
              label="Edit item"
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
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
