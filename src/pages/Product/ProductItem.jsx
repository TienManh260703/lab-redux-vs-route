import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);
  const handleAddToCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(updateQuantity(item.id));
    } else {
      dispatch(addToCart(item.id, item));
    }
    console.log(cart);
  };

  return (
    <>
      <div className="product__item" key={item.id}>
        <img
          className="product__image"
          src={item.thumbnail}
          alt={item.title}
        ></img>
        <h3 className="product__title">{item.title}</h3>
        <div className="product__price-new">
          {((item.price * (100 - item.discountPercentage)) / 100).toFixed(1)}$
        </div>
        <div className="product__price-old">{item.price}$</div>
        <div className="product__price-percent">
          {item.discountPercentage} %
        </div>
        <div className="product__description">{item.description}</div>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </>
  );
}
ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    discountPercentage: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
export default ProductItem;
