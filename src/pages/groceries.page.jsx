import React, { useState, useEffect } from "react";
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
      completed
      ordered
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
  const filterData = (value) => {
    if (data && value) {
      let existingshop = null;
      if (value === "0") {
        setDataItems(data.items);
      } else {
        setDataItems(
          data.items.filter((item) => {
            if (item.shop) {
              existingshop = item.shop.filter((shop) => shop.id === value);
            }
            return existingshop.length > 0 ? item : null;
          })
        );
      }
    }
  };

  const { data, loading, error } = useQuery(GET_ITEMS);
  const getshops = useQuery(GET_SHOPS);

  const dataShops = getshops.data;
  const [selectedShop, setSelectedShop] = useState(
    localStorage.getItem("selectedshop")
      ? localStorage.getItem("selectedshop")
      : ""
  );

  let [dataItems, setDataItems] = useState();
  useEffect(() => {
    filterData(
      localStorage.getItem("selectedshop")
        ? localStorage.getItem("selectedshop")
        : null
    );
    // eslint-disable-next-line
  }, [data]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  if (data && !dataItems) {
    setDataItems(data.items);
  }

  const handleChange = (event) => {
    setSelectedShop(event.target.value);
    localStorage.setItem("selectedshop", event.target.value);
    filterData(event.target.value);
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
            <MenuItem value="0">All</MenuItem>
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
            <h1>ITEMS</h1>
            <GroceryList
              items={
                dataItems
                  ? dataItems.filter((item) => !item.completed && !item.ordered)
                  : dataItems
              }
            ></GroceryList>
          </Container>

          <h1>ORDERED ITEMS</h1>
          <GroceryList
            items={
              dataItems ? dataItems.filter((item) => item.ordered && !item.completed) : dataItems
            }
          ></GroceryList>
          <h1>DONE ITEMS</h1>
          <GroceryList
            items={
              dataItems ? dataItems.filter((item) => item.completed) : dataItems
            }
          ></GroceryList>
        </Paper>
      </Container>
    </div>
  );
};

export default Groceries;
