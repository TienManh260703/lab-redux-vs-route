import { useDispatch } from "react-redux";
import { updateQuantity, deleteItem } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
  const { item } = props;

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleUP = () => {
    dispatch(updateQuantity(item.id));
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  };
  const handleDow = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item.id, -1));
      inputRef.current.value = inputRef.current.value - 1;
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.info.thumbnail} alt={item.info.title} />
        </div>
        <div className="cart__content">
          <h2 className="cart__title">{item.info.title}</h2>
          <div className="cart__price-new">{item.info.price}</div>
          <div className="cart__price-old">
            {(
              (item.info.price * (100 - item.info.discountPercentage)) /
              100
            ).toFixed(1)}
            $
          </div>
        </div>
        <div className="cart__quantity">
          <button onClick={handleDow}>-</button>
          <input ref={inputRef} defaultValue={item.quantity} />
          <button onClick={handleUP}>+</button>
        </div>
        <button onClick={handleDelete} className="cart__delete">
          Xóa
        </button>
      </div>
    </>
  );
}

export default CartItem;
