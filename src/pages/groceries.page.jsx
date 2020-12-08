
import { Paper, Container } from "@material-ui/core";
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

const Groceries = () => {
  const { data, loading, error } = useQuery(GET_ITEMS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <div style={{ paddingTop: "5%" }}>
      <Container>
        <Paper>
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
