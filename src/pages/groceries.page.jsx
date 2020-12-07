import AddItem from "../components/additem.component";
import { Paper, Container } from "@material-ui/core";
import ItemsContainer from "../containers/items.container";


const Groceries = () => {
  return (
    <div style={{ paddingTop: "5%" }}>
      <Container>
        <Paper>
          <Container>
            <AddItem></AddItem>
            <ItemsContainer></ItemsContainer>           
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Groceries;
