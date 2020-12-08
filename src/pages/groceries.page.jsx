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
  const { data, loading, error } = useQuery(GET_ITEMS);
  const getshops = useQuery(GET_SHOPS);

  const dataShops = getshops.data;
  const [selectedShop, setSelectedShop] = useState("");
  let [dataItems, setDataItems] = useState();

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  if (data && !dataItems) {
    setDataItems(data.items);
  }

  const handleChange = (event) => {
    setSelectedShop(event.target.value);

    if (data && event.target.value) {
      let existingshop = null;
      setDataItems(
        data.items.filter((item) => {
          if (item.shop) {
            existingshop = item.shop.filter(
              (shop) => shop.id === event.target.value
            );
          }          
          return existingshop.length > 0 ? item : null;
        })
      );

      
    }
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
            <GroceryList items={dataItems}></GroceryList>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Groceries;
