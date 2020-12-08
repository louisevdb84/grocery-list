import AddItemContainer from "../containers/add-item.container";
import { Paper, Container } from "@material-ui/core";
import ItemsContainer from "../containers/items.container";

const Groceries = () => {
  return (
    <div style={{ paddingTop: "5%" }}>
      <Container>
        <Paper>
          <Container>
            <AddItemContainer></AddItemContainer>
            <ItemsContainer></ItemsContainer>           
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Groceries;
