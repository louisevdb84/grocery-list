// import { useState } from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import {
//   ListItem,
//   ListItemIcon,
//   ListItemSecondaryAction,
//   ListItemText,
//   Checkbox,
//   IconButton,
// } from "@material-ui/core";
// import gql from "graphql-tag";
// import { useMutation } from "@apollo/react-hooks";

// const EDIT_ITEM = gql`
//   mutation editItem($_id: String!, $name: String!, $shopID: [String]) {
//     editItem(_id: $_id, name: $name, shopID: $shopID) {
//       name
//     }
//   }
// `;

// export default function GroceryItem({ name, id, completed, ordered, shopID }) {
//   const [editItem] = useMutation(EDIT_ITEM);

//   const edititem = () => {
//     editItem({
//       variables: {
//         _id: id,
//         name: "test",
//         shopID: shopID,
//       },
//     }).then(() => window.location.reload());
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={5}>
//             <TextField
//               value={newitem}
//               required
//               id="newitem"
//               name="newitem"
//               label="Add new item"
//               fullWidth
//               autoComplete="given-name"
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <MultiSelect
//               options={options}
//               value={selected}
//               onChange={setSelected}
//               labelledBy={"Select"}
//             />
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <Button variant="contained" color="primary" type="submit">
//               Add item
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// }



