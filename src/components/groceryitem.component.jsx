import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
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

const UPDATE_COMPLETED = gql`
  mutation updateCompletedItem($_id: String!, $completed: Boolean!) {
    updateCompletedItem(_id: $_id, completed: $completed) {
      name
    }
  }
`;

const UPDATE_ORDERED = gql`
  mutation updateOrderedItem($_id: String!, $ordered: Boolean!) {
    updateOrderedItem(_id: $_id, ordered: $ordered) {
      name
    }
  }
`;

export default function GroceryItem({ name, id, completed, ordered }) {
  const [deleteItem] = useMutation(DELETE_ITEM);
  const [updateCompletedItem] = useMutation(UPDATE_COMPLETED);
  const [updateOrderedItem] = useMutation(UPDATE_ORDERED);
  const [checked, setChecked] = useState([0]);

  const deletethisitem = () => {
    const deleteConfirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (deleteConfirm) {
      deleteItem({
        variables: {
          _id: id,
        },
      }).then(() => window.location.reload());
    }
  };

  const markascompleted = () => {
    updateCompletedItem({
      variables: {
        _id: id,
        completed: !completed,
      },
    }).then(() => window.location.reload());
  };

  const markasordered = () => {
    updateOrderedItem({
      variables: {
        _id: id,
        ordered: !ordered,
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
          onClick={markascompleted}
        />
      </ListItemIcon>
      <ListItemText
        style={{
          fontWeight: "bold",
          textDecoration: completed || ordered ? "line-through" : "none",
        }}
        id={labelId}
        primary={name}
      />
      {/* {shop
        ? shop.map((shop, key) => {
            return <ListItemText id={key} key={key} primary={shop.name} />;
          })
        : null} */}

      <ListItemSecondaryAction>
        <IconButton onClick={markasordered} edge="end" aria-label="ordered">
          <LocalShippingIcon />
        </IconButton>
        <IconButton onClick={deletethisitem} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
