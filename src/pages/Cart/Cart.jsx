import { useDispatch, useSelector } from "react-redux";
import "./CartList.scss";
import CartList from "./CartList";
import { deleteAll } from "../../actions/cart";
function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  // console.log(cart);
  const total = cart.reduce((sum, item) => {
    const priceNew =
      (item.info.price * (100 - item.info.discountPercentage)) / 100;
    return sum + priceNew * item.quantity;
  }, 0);

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <>
      <div className="cart__top">
        <h2>Giỏ hàng</h2>
        <button onClick={handleDeleteAll}>Xóa tất cả</button>
      </div>
      <div>
        {cart.length > 0 ? (
          <>
            <CartList />
            <div className="cart__total">
              Tổng tiền : <span>{total.toFixed(2)} $</span>
            </div>
          </>
        ) : (
          <>Giỏ hàng trống</>
        )}
      </div>
    </>
  );
}
export default Cart;
