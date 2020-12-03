import GroceryItem from "./groceryitem.component";
import { connect } from "react-redux";
import { Card, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const GroceryList = ({ items }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <Card variant="outlined">
        <Container>
          {items.map((item) => {
            return <GroceryItem {...item} key={item.id}></GroceryItem>;
          })}
        </Container>
      </Card>
    </List>
  );
};

const mapStateToProps = (state) => ({
  items: state.item.items,
});

export default connect(mapStateToProps)(GroceryList);
