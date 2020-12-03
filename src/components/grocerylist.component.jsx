import GroceryItem from "./groceryitem.component";
import { connect } from "react-redux";

const GroceryList = ({ items }) => {
  return items.map((item) => {
    return <GroceryItem {...item} key={item.id}></GroceryItem>;
  });
};

const mapStateToProps = (state) => ({
  items: state.item.items,
});

export default connect(mapStateToProps)(GroceryList);
