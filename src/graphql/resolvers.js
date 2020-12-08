import { gql } from "apollo-boost";
import { utils_addItems } from "./item.utils";


export const typeDefs = gql `
    extend type Mutation {
        AddItem(item: Item!): [Item]
    }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const resolvers = {
    Mutation: {
     
      addItem: (_root, { item }, { cache }) => {
        const { cartItems } = cache.readQuery({
          query: GET_CART_ITEMS
        });
  
        const newCartItems = utils_addItems(cartItems, item);
  

  
        cache.writeQuery({
          query: GET_CART_ITEMS,
          data: { cartItems: newCartItems }
        });
  
        return newCartItems;
      }
    }
  };