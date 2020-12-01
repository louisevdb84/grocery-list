import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Shops from "../mock-db/shop";

const AddItem = () => {
  const [newitem, setNewitem] = useState("");
  const [selected, setSelected] = useState([{ label: "Lidl", value: 1 }]);

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSubmit = (event) => {
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
export default AddItem;
