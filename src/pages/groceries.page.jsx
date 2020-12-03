import AddItem from "../components/additem.component";
import GroceryList from "../components/grocerylist.component";
import { Paper, Container } from "@material-ui/core";

const Groceries = () => {
  return (
    <div style={{paddingTop: "5%"}}>
    <Container>
      <Paper>
      <Container>
        <AddItem></AddItem>
        <GroceryList></GroceryList>        
        </Container>
      </Paper>
    </Container>
    </div>
  );
};

export default Groceries;
