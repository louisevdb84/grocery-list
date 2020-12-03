import user from "./user";
import shops from "./shop";

const items = [
  {
    id: 1,
    name: "Bread",
    user: user[0],
    shops: [shops[0]],
  },
  {
    id: 2,
    name: "Milk",
    user: user[0],
    shops: shops,
  },
];

export default items;
