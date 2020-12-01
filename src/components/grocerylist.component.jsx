import Items from "../mock-db/item";
import GroceryItem from "./groceryitem.component";

const GroceryList = () =>
  Items.map((item) => {
    console.log(item.id);
    return (
      <div>
        <GroceryItem {...item} key={item.id}></GroceryItem>        
      </div>
    );
  });

export default GroceryList;
