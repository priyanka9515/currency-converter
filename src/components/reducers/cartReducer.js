import Item1 from "../../images/item1.png";
import Item2 from "../../images/item2.png";
import Item3 from "../../images/item3.png";

const initState = {
  items: [
    {
      id: 1,
      title: "Mobile",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Shirt",

      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "shoes",

      price: 120,
      img: Item3
    }
  ],
  addedItems: [],
  total: 0
};
const cartReducer = (state = initState, action) => {
  return state;
};
export default cartReducer;
