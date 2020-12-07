import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../components/spinner.component";
import GroceryList from "../components/grocerylist.component";

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

const ItemsContainer = () => (
  <Query query={GET_ITEMS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner></Spinner>;
      return <GroceryList items={data.items}></GroceryList>;
    }}
  </Query>
);

export default ItemsContainer;
