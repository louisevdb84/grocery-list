import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Stores from "../mock-db/store";

const AddItem = () => {
  const [newitem, setNewitem] = useState("");
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(newitem);
    alert(selected);
    setNewitem("");
    event.preventDefault();
  };

  const options = Stores.map((store) => {
    return { label: store.name, value: store.id };
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
