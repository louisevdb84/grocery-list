import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import AddItem from "../components/additem.component";

const ADD_ITEM = gql`
  mutation AddItem($item: Item!) {
    addItems(item: $item) @client
  }
`;

const AddItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM}>
    {(addItem) => (
      <AddItem
        {...props}
        addItem={(item) => addItem({ variables: { item } })}
      ></AddItem>
    )}
  </Mutation>
);

export default AddItemContainer;
