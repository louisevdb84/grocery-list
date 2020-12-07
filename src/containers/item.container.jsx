import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../components/spinner.component";
import GroceryItem from "../components/groceryitem.component";

var id = "5fcdddd9bfbae8392cd655bf";
const GET_ITEM_BY_ID = gql`
  query getItemById($id: ID!) {
    item(id: $id) {
      name
      shop {
        id
        name
      }
    }
  }
`;

const ItemContainer = () => (
  <Query query={GET_ITEM_BY_ID} variables={{ id: id }}>
    {({ loading, error, data }) => {
      console.log("This is on id", loading, error, data);
      if (loading) return <Spinner></Spinner>;

      return <GroceryItem item={data.item}></GroceryItem>;
    }}
  </Query>
);

export default ItemContainer;
