import { gql } from "apollo-boost";
import { utils_addItems } from "./item.utils";


export const typeDefs = gql `
    extend type Mutation {
        AddItem(item: Item!): [Item]
    }
`;

const GET_ITEMS = gql`
  {
    items @client
  }
`;

export const resolvers = {
    Mutation: {     
      addItem: (_root, { item }, { cache }) => {
        const { items } = cache.readQuery({
          query: GET_ITEMS
        });
  
        const newItems = utils_addItems(items, item);
        cache.writeQuery({
          query: GET_ITEMS,
          data: { items: newItems }
        });
  
        return newItems;
      }
    }
  };