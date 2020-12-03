//import './App.css';

import {useEffect} from 'react';
import Items from "./mock-db/item";

import Groceries from './pages/groceries.page';
import {connect } from 'react-redux';
import addItem from './redux/items/item.actions';


function App({addItem}) {  
  useEffect(()=>{
    Items.map((item)=>addItem(item));    
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Groceries></Groceries>  
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(App);
