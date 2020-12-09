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
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const DELETE_ITEM = gql`
  mutation deleteItem($_id: String!) {
    deleteItem(_id: $_id) {
      name
    }
  }
`;

export default function GroceryItem({ name, id, shop }) {
  const [deleteItem] = useMutation(DELETE_ITEM);
  const [checked, setChecked] = useState([0]);

  const deletethisitem = () => {
    deleteItem({
      variables: {
        _id: id,
      },
    }).then(() => window.location.reload());
  };

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
          onClick={deletethisitem}
        />
      </ListItemIcon>
      <ListItemText
        style={{ fontWeight: "bold", color: "red" }}
        id={labelId}
        primary={name}
      />
      {shop
        ? shop.map((shop, key) => {
            return <ListItemText id={key} key={key} primary={shop.name} />;
          })
        : null}

      <ListItemSecondaryAction>
        <IconButton onClick={deletethisitem} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
