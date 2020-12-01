import Items from "../mock-db/item";
import GroceryItem from "./groceryitem.component";


const GroceryList = () =>{

  
    return (
        Items.map((item) => {       
        return (      
            <GroceryItem {...item} key={item.id}></GroceryItem>        
          
        );
      }));
    
}
  
export default GroceryList;
