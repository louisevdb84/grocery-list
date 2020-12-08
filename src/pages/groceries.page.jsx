import React, { useState } from "react";
import { Paper, Container, Select, MenuItem } from "@material-ui/core";
import GroceryList from "../components/grocerylist.component";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import AddItem from "../components/additem.component";

const GET_ITEMS = gql`
  query getItems {
    items {
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
    }
  }
`;

const Groceries = () => {
  let { data, loading, error } = useQuery(GET_ITEMS);
  const getshops = useQuery(GET_SHOPS);

  const dataShops = getshops.data;
  const [selectedShop, setSelectedShop] = useState("");

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  dataShops ? console.log("SHOPS", dataShops) : console.log("NOT SHOP");

  if (data) {
    data.items = data.items.filter((item) => {
      console.log(item);
      return item.shop;
    });
    console.log(data, "WITHIN");
  }

  const handleChange = (event) => {
    setSelectedShop(event.target.value);
  };

  return (
    <div style={{ paddingTop: "5%" }}>
      <Container>
        <Paper>
          <Select
            labelId="select-label"
            id="select"
            value={selectedShop}
            onChange={handleChange}
          >
            {dataShops ? (
              dataShops.shops.map((shop) => (
                <MenuItem key={shop.id} value={shop.id}>
                  {shop.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={1}>Loading</MenuItem>
            )}
          </Select>
          <Container>
            <AddItem></AddItem>
            <GroceryList items={data.items}></GroceryList>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Groceries;
