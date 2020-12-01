import { connect } from 'react-redux';

import AddItem from "../components/additem.component";
import GroceryList from "../components/grocerylist.component";



const Groceries = () => 
  <div className="App">
    <AddItem></AddItem>
    <GroceryList></GroceryList>
  </div>


export default Groceries;
