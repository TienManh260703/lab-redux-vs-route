import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  return <>Cart</>;
}
export default Cart;
