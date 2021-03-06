import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SimpleModal from "./modal.component";
import EditItem from "./edititem.component";

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

export default function GroceryItem({ name, id, completed, ordered, shop }) {
  const [deleteItem] = useMutation(DELETE_ITEM);
  const [updateCompletedItem] = useMutation(UPDATE_COMPLETED);
  const [updateOrderedItem] = useMutation(UPDATE_ORDERED);

  const deletethisitem = () => {
    const deleteConfirm = window.confirm(
      `Are you sure you want to delete ${name}?`
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

  const labelId = `checkbox-list-label-${id}`;

  return (
    <ListItem key={id} role={undefined} dense button>
      <Checkbox edge="start" onClick={markascompleted} />

      <span></span>
      <ListItemText
        style={{
          fontWeight: "bold",
          textDecoration: completed || ordered ? "line-through" : "none",
        }}
        id={labelId}
        primary={name}
      />
      <ListItemSecondaryAction>
        <SimpleModal
          OpenModal={
            <IconButton edge="end" aria-label="ordered">
              <EditIcon />
            </IconButton>
          }
          BodyModal={<EditItem id={id} name={name} shop={shop}></EditItem>}
        ></SimpleModal>
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
