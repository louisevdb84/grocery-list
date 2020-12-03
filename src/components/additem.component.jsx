import React, { useState } from "react";
import { connect } from "react-redux";
import addItem from "../redux/items/item.actions";
import MultiSelect from "react-multi-select-component";
import Shops from "../mock-db/shop";

const AddItem = ({ addItem }) => {
  const [newitem, setNewitem] = useState("");
  const [selected, setSelected] = useState([{ label: "Lidl", value: 1 }]);

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSubmit = (event) => {    
    addItem({
      id: Math.floor(Math.random() * 100),
      name: newitem,
      shops: {
        id: Math.floor(Math.random() * 100),
        name: selected.label,
      },
    });

    setNewitem("");
    event.preventDefault();
  };

  const options = Shops.map((shop) => {
    return { label: shop.name, value: shop.id };
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newitem">Add</label>
        <input
          value={newitem}
          id="newitem"
          type="text"
          onChange={handleChange}
        />
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy={"Select"}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(AddItem);
