import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@material-ui/core";

export default function GroceryItem({ name, id, shops }) {
  const [checked, setChecked] = useState([0]);
  console.log("shops", shops);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const labelId = `checkbox-list-label-${id}`;

  return (
    <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(id) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={name} />
      {shops.map((shop, key) => {
        return <ListItemText id={key} key={key} primary={shop.name} />;
      })}

      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
